import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/db.js';
import workoutRoutes from './routers/workoutRoute.js'
dotenv.config();
const port =5000;
connectDb();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/workout',workoutRoutes);
app.listen(port,()=>{
    console.log(`Server running at:${port}`);
})