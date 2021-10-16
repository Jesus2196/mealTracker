const Meal = require('../models/meal');

module.exports = {
    index,
}

function index(req, res) {
    Meal.find({}, function (err, meals) {
        res.render('meals/index', { meals: meals })
    });
}