const Meal = require('../models/meal');

module.exports = {
    index,
    new: newMeal,
}

function index(req, res) {
    Meal.find({}, function (err, meals) {
        res.render('meals/index', { meals: meals })
    });
}

function newMeal(req, res) {
    res.render('meals/new');
}