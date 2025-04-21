import { Request, Response } from 'express';
import { Product } from '../models/product.model';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';


 export const addProduct = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
  try {
    const { name, price, description, category } = req.body;

    console.log('Received product data:', { name, price, description, category });
    if (!name || !price || !description || !category) {
       res.status(400).json({ message: 'All product fields are required' });
       
    }

    console.log('Seller ID from token:', req.user?.id);
    // Your product logic here (e.g., saving to DB)
    const newProduct = new Product({
      name,
      price,
      description,
      category,
      sellerId: req.user?.id, // Use the user ID from the token
    });

    await newProduct.save();
    console.log('Product saved:', newProduct); // Log product after saving

     res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
     res.status(500).json({ message: 'Internal server error' });
  }
};


  export const getSellerProducts = async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
      const sellerId = req.user?.id;
      const products = await Product.find({ sellerId });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  
