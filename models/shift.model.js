const mongoose = require('mongoose'); // Assurez-vous que mongoose est importé correctement

const Schema = mongoose.Schema;

const WeeklyScheetSchema = new mongoose.Schema({
  dayname: {
    type: String,
    required: true,
    enum: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  },
  isopen: {
    type: Boolean,
    default: true
  },
  shifts: [
    {
      name: {
        type: String,
        required: true
      },
      openingTime: {
        type: String,
        required: true
      },
      closingTime: {
        type: String,
        required: true
      },
      duréeDeReservation: {
        type: Schema.Types.Mixed,  // Allows both number and string
        required: true
      }
    }
  ],
 
});

const WeeklyScheet = mongoose.model('WeeklyScheet', WeeklyScheetSchema);
module.exports = WeeklyScheet;

