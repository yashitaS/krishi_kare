import express, { Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import productRoutes from './routes/product.routes'; 
import path from 'path';

// 🔄 Load environment variables
dotenv.config(); // Simplified since the .env file is in the root directory

const app: Application = express();
const PORT = process.env.PORT || 5002;
const MONGODB_URI = process.env.MONGODB_URI!;

// Log environment variables for debugging
console.log('Loaded environment variables:', process.env); // Check if the variables are loaded

// 🔌 Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('public/uploads')); // ✅ Serve image uploads

// 📦 Routes
app.use('/api/auth', authRoutes); // 🔐 Auth routes (register, login)
app.use('/api/products', productRoutes);
// 🔁 Health check endpoint
app.get('/', (_req, res) => {
  res.send('🌿 KrishiKare API is running...');
});

const listRoutes = (prefix: string, router: any) => {
  router.stack.forEach((layer: any) => {
    if (layer.route && layer.route.path) {
      const methods = Object.keys(layer.route.methods)
        .map((m) => m.toUpperCase())
        .join(', ');
      console.log(`📌 Route: [${methods}] ${prefix}${layer.route.path}`);
    }
  });
};

if (!MONGODB_URI) {
  console.error('❌ MongoDB URI is not defined in .env file.');
  process.exit(1); // Exit the application if MongoDB URI is not found
}

// 🌐 MongoDB Connection & Server Start
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);

      listRoutes('/api/auth', authRoutes);
      listRoutes('/api/products', productRoutes);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
