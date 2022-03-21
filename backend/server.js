import express from 'express'
import dotenv from'dotenv/config'
import colors from "colors";
import connectDB from "./config/db.js"
const port = process.env.PORT || 5000

import plantRoutes from "./routes/plantRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import {errorHandler} from './middlware/errorMiddleware.js'

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/plants', plantRoutes)
app.use('/api/users', userRoutes)
app.listen(port, () => console.log(`Server started on port ${port}`) )