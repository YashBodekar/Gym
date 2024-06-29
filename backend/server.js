const express = require('express');
const connectDB = require('./config/db');
const exerciseRoutes = require('./routes/exerciseRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());

app.use('/api/exercises', exerciseRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
