const express = require("express")
const colors = require('colors')
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const port = process.env.PORT || 5000
const {errorHandler} = require('./middlware/errorMiddleware')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/plants', require('./routes/plantRoutes'))
//app.use('/api/users', require('./routes/userRoutes'))
app.listen(port, () => console.log(`Server started on port ${port}`) )