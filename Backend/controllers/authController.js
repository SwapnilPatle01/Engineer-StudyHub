import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, role, companyDetails } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      role,
      companyDetails: role === 'company' ? companyDetails : undefined,
    });

    await user.save();

    // Generate token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
    });
  } catch (error) {
    return res.status(400).json({ message: 'Validation failed: ' + error.message });
  }
};
