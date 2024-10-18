import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongdb.js'

// app config
const PORT =process.env.PORT || 4000
const app = express()
await connectDB()
// initialize middlewares
app.use(express.json())
app.use(cors())
// api routes
app.get('/',(req,res)=>res.send('API Working'))
app.listen(PORT,()=>console.log('server running on port',PORT ))