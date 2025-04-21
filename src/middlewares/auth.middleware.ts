import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  user?: { id: string; role: string };
}

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return; 
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string; role: string };
    console.log('✅ Decoded Token:', decoded);
    if (!decoded || !decoded.userId || typeof decoded.role !=='string') {
      console.log('Invalid token structure:', decoded);
      res.status(401).json({ message: 'Invalid token structure' });
      return;
    }
    req.user = {id: decoded.userId, role:decoded.role};
    console.log('✅ Decoded Token:', decoded);

    next();
  } catch (error) {
    console.log('Token verification error:', error);
    res.status(401).json({ message: 'Invalid token' });
    return; 
  }
};
