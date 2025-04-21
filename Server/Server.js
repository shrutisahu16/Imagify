import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"
const PORT = process.env.PORT || 4000

const app = express()
//middlewaare
app.use(express.json());//so all the method will be passed using json method
app.use(cors())

await connectDB();
app.use('/api/user',userRouter)
app.use('/api/image',imageRouter)
app.get('/', (req,res)=> res.send("API WORKING"))
//1627
app.listen(PORT,()=> console.log("Server running on port "+ PORT));