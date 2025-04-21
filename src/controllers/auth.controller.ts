import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/auth.models';
import { getWeatherByCity } from '../services/weather.service';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables from .env file
dotenv.config({ path: join(__dirname, '../.env') });

const mySecret = process.env.JWT_SECRET;

// =========================
// REGISTER
// =========================
export const registerUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, phone, email, password, role, address, gender, businessName} = req.body;

    if (!name || !phone || !email || !password || !role || !address || !gender ||(role === 'Seller'&& !businessName)){
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (!['Buyer', 'Seller'].includes(role)) { // ✅ Validate role
      return res.status(400).json({ message: 'Invalid role. Must be Buyer or Seller.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: typeof User.prototype = new User({
      name,
      phone,
      email,
      password: hashedPassword,
      role,
      address,
      gender,
      businessName
    });

    await newUser.save();

   
    const token = jwt.sign(
      { userId: newUser._id.toString(), role: newUser.role},
      mySecret,
      { expiresIn: '7d' }
    );
    
    // ✅ Log the token
    console.log(`🆕 Registered token for ${newUser.email}: ${token}`);

    return res.status(201).json({
      message: 'User registered successfully. Please select your role.',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        businessName: newUser.businessName,
        address: newUser.address,
      },
      token,
    });

  } catch (error) {
    console.error('❌ Error registering user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// =========================
// LOGIN
// =========================
export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role},
      JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    // ✅ Log the token
    console.log(`🔐 Login token for ${user.email}: ${token}`);

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        businessName: user.businessName,
        address: user.address,
      },
      token,
    });

  } catch (error) {
    console.error('❌ Error logging in:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// =========================
// SET USER ROLE
// =========================
export const setUserRole = async (req: Request, res: Response): Promise<Response> => {
  const { userId, role } = req.body;

  try {
    if (!['Buyer', 'Seller'].includes(role)) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const user = await User.findByIdAndUpdate(userId, { role }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Role set successfully', role: user.role });
  } catch (error) {
    console.error('❌ Error setting role:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// =========================
// BUYER DASHBOARD
// =========================
export const getBuyerDashboard = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user || user.role !== 'Buyer') {
      return res.status(404).json({ message: 'Buyer not found' });
    }

    const weather = await getWeatherByCity(user.address);

    return res.status(200).json({
      personalInfo: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender
      },
      paymentMethods: ['COD', 'Card', 'UPI'],
      subscription: [], // Hook: insurance data
      location: {
        address: user.address || '',
        weather: null // Hook: weather API
      },
      orderHistory: [], // Hook: order model
      invoices: []      // Hook: invoice model
    });
  } catch (error) {
    console.error('❌ Error fetching buyer dashboard:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// =========================
// SELLER DASHBOARD
// =========================
export const getSellerDashboard = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user || user.role !== 'Seller') {
      return res.status(404).json({ message: 'Seller not found' });
    }

    return res.status(200).json({
      personalInfo: {
        name: user.name,
        contact: user.phone,
        businessName: user.businessName,
        address: user.address,
      },
      paymentMethods: ['Card', 'UPI'],
      salesSummary: {}, // Hook: sales data
      orders: [],       // Hook: order model
      products: []      // Hook: product model
    });
  } catch (error) {
    console.error('❌ Error fetching seller dashboard:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
