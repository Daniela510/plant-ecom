import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Register new user
// @route POST /api/users
//access Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// @desc Register new user
// @route POST /api/users
//access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    isAdmin,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id, user.isAdmin)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.json({ message: "User is registered" });
});

// @desc Register new user
// @route POST /api/users/login
//access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id, user.isAdmin),
      });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Register new user
// @route GET /api/users/me
//access Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

//generate JWT
const generateToken = (id, admin) => {
  return jwt.sign({id, admin}, process.env.JWT_SECRET, {expiresIn:'30d'})
}

export { registerUser, loginUser, getMe, getUsers };
