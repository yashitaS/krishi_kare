import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: {
    type: String,
    enum: ['Fruits', 'Vegetables', 'Seeds'],
    required: true,
  },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
