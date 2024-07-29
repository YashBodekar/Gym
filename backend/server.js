process.env.NODE_NO_WARNINGS = '1';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const exerciseRoutes = require('./routes/exerciseRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authroutes');
// import dotenv from "dotenv";
dotenv.config(); 
// dotenv.config();


const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;


const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false); 
    const uri = process.env.MONGODB_URI || 'mongodb+srv://yashbodekar54:Ya2006sh@cluster0.xbvwmqc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' ;
    console.log(uri);
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=>{
      console.log('Connected to MongoDB Gym app');
    }
    ).catch((err)=> console.log('Err: ', err));
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); 
  }
};

connectDB(); 

app.use(express.json());

app.use('/api/exercises', exerciseRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});


