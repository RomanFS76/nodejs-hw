import createHttpError from 'http-errors';
import bcrypt from "bcrypt";
import { User } from '../models/user.js';

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const isUser = await User.findOne({ email });

  if (isUser) {
    throw createHttpError(400, 'Email in use');
  }

  const hashesPassword = await bcrypt.hash (password, 10);

  const newUser = await User.create({ email, password: hashesPassword });

  res.status(201).json({newUser});
};
