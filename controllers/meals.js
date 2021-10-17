const Meal = require('../models/meal');

module.exports = {
    index,
    new: newMeal,
    create,
}

function index(req, res) {
    Meal.find({}, function (err, meals) {
        res.render('meals/index', { meals: meals })
    });
}

function newMeal(req, res) {
    res.render('meals/new');
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    let meal = new Meal(req.body);
    meal.save(function (err) {
        if (err) return res.redirect('/meals/new');
        res.redirect('/meals');
    });
}