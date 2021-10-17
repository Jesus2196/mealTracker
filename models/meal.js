let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mealSchema = new Schema({
    date: {
        type: Date,
    },
    breakfast: {
        type: String,
        default: 'N/A',
    },
    lunch: {
        type: String,
        default: 'N/A',
    },
    dinner: {
        type: String,
        default: 'N/A',
    },
    snacks: {
        type: String,
        default: 'N/A',
    }
});

module.exports = mongoose.model('Meal', mealSchema);