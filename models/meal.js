let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const mealSchema = new Schema({
    breakfast: {
        type: String,
    },
    lunch: {
        type: String,
    },
    dinner: {
        type: String,
    },
    snacks: {
        type: String,
    }
});

module.exports = mongoose.model('Meal', mealSchema);