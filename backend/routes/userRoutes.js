import express from "express";
const router = express.Router()
import {registerUser, getUsers, loginUser, getMe} from '../controllers/userController.js'

router.route('/').get(getUsers).post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(getMe)

// router.route('/:id').put(updateUser).delete(deleteUser)

export default router;