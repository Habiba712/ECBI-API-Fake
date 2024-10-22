const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
    default: ''
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
    default: ''
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    required: true,
    trim: true,
  },
  table:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Table"
  },
  phone: {
    type: String, 
    required: false
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [false, "can't be blank"],
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  shiftId:
     { type: mongoose.Schema.Types.ObjectId } // Make sure this is correct
  

}, {
  timestamps: true,
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;


