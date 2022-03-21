import jwt  from 'jsonwebtoken';
import bcrypt from "bcryptjs";

// @desc Register new user 
// @route POST /api/users
//access Public
const getUsers = (req, res) =>{
 res.json({message: 'All users'})
}

// @desc Register new user 
// @route POST /api/users
//access Public
const registerUser = (req, res) =>{
 res.json({message: 'User is registered'})
}

// @desc Register new user 
// @route POST /api/users/login
//access Public
const loginUser = (req, res) =>{
 res.json({message: 'User is loggin in'})
}


// @desc Register new user 
// @route GET /api/users/me
//access Public
const getMe = (req, res) =>{
 res.json({message: 'User data display'})
}


export {
    registerUser, loginUser, getMe, getUsers
}