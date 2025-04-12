import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1]; // Get the token from headers

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};