const express = require("express")
const router = express.Router()
const {registerUser, getUsers, loginUser, getMe} = require('../controllers/userController')

router.route('/').get(getUsers).post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(getMe)

// router.route('/:id').put(updateUser).delete(deleteUser)

module.exports = router