import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import authRoutes from './routes/authRoutes'
import userRouter from './routes/userRoutes'



const app = express();

app.use(express.json());

//Routes

//autentication
app.use('/auth',authRoutes)
app.use('/users',userRouter)
console.log("app test")
//user

export default app