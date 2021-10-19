let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mealSchema = new Schema({
    date: {
        type: Date,
    },
    breakfast: {
        type: String,
        default: '[Empty]',
    },
    breakfastCals: {
        type: Number,
        default: 0
    },
    lunch: {
        type: String,
        default: '[Empty]',
    },
    lunchCals: {
        type: Number,
        default: 0
    },
    dinner: {
        type: String,
        default: '[Empty]',
    },
    dinnerCals: {
        type: Number,
        default: 0
    },
    snacks: {
        type: String,
        default: '[Empty]',
    },
    snackCals: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Meal', mealSchema);