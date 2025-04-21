import { Router } from 'express';
import {
  registerUser,
  loginUser,
  setUserRole,
  getBuyerDashboard,
  getSellerDashboard
} from '../controllers/auth.controller';

const router = Router();

// 🔐 Register
router.post('/register', async (req, res) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    console.error('Register route error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// 🔐 Login
router.post('/login', async (req, res) => {
  try {
    await loginUser(req, res);
  } catch (error) {
    console.error('Login route error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// ✅ Set User Role (Buyer or Seller)
router.put('/set-role', async (req, res) => {
  try {
    await setUserRole(req, res);
  } catch (error) {
    console.error('Set role route error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// 📦 Buyer Dashboard
router.get('/dashboard/buyer/:userId', async (req, res) => {
  try {
    await getBuyerDashboard(req, res);
  } catch (error) {
    console.error('Buyer dashboard route error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// 🛒 Seller Dashboard
router.get('/dashboard/seller/:userId', async (req, res) => {
  try {
    await getSellerDashboard(req, res);
  } catch (error) {
    console.error('Seller dashboard route error:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

export default router;
