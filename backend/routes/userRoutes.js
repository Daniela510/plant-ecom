import express from "express";
const router = express.Router()
import {registerUser, getUsers, loginUser, getMe} from '../controllers/userController.js'
import {protect} from '../middlware/authMiddleware.js'

router.route('/').get(getUsers).post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(protect, getMe)

// router.route('/:id').put(updateUser).delete(deleteUser)

export default router;