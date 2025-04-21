import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  phone: number;
  email: string;
  password: string;
  role: 'Buyer' | "Seller"; //optional initially
  address: string;
  businessName: string;//For seller
  gender: string;
}

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number, // You could also use String if you want to preserve leading zeros
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Buyer', 'Seller'],
    required: true, 
  },
  address: {
    type: String,
    required: true,
  },
  businessName:{
    type:String,
    required: function(this: IUser){
      return this.role === 'Seller';
    }
  },
  gender:{
    type:String,
    enum: ['Female', 'Male'],
    required: true,
  }
}, {
  timestamps: true, 
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
