import express from 'express';
import cors from 'cors';
import Dotenv  from 'dotenv';
import todoRoutes from './routes/todo.route.js';
import { connectDB } from './config/db.js';


Dotenv.config(); 
console.log("MONGO_URL:", process.env.MONGO_URL);


const app = express();

app.use(express.json())
app.use(cors());

app.use('/api/todos', todoRoutes);

app.listen(5000,()=>{
    connectDB();
    console.log('Server started at http://localhost:5000');
    
})

