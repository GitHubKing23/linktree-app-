import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async function(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });
    req.user = { id: user._id };
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
}
