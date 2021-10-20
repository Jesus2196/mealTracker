let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mealSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    date: {
        type: Date,
    },
    breakfast: {
        type: String,
    },
    breakfastCals: {
        type: Number,
        default: 0
    },
    lunch: {
        type: String,
    },
    lunchCals: {
        type: Number,
        default: 0
    },
    dinner: {
        type: String,
    },
    dinnerCals: {
        type: Number,
        default: 0
    },
    snacks: {
        type: String,
    },
    snackCals: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Meal', mealSchema);


//user centric on this page

