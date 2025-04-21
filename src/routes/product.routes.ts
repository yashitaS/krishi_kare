import express from 'express';
import { addProduct, getSellerProducts } from '../controllers/product.controller';
import { authenticateJWT } from '../middlewares/auth.middleware'; // ensure JWT is validated

const router = express.Router();

// POST /api/products/add
router.post('/add', authenticateJWT, (req, res, next) => {
    console.log('POST /api/products/add route reached');
    next();
  },authenticateJWT, addProduct);
  //authenticateJWT

// GET /api/products/mine
router.get('/mine', authenticateJWT, getSellerProducts);

export default router;
