const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Exercise', exerciseSchema);
