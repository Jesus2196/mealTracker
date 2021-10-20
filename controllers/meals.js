const Meal = require('../models/meal');

module.exports = {
    index,
    new: newMeal,
    create,
    show,
    edit,
    update,
}

function index(req, res) {
    Meal.find({ user: req.user._id }, function (err, meals) {
        res.render('meals/index', { meals: meals })
    }).sort("date");
}

function newMeal(req, res) {
    res.render('meals/new');
}

function create(req, res) {
    Meal.findOne({user: req.user._id, date: req.body.date }, function(err, meal) {
        if (meal) return res.redirect('/meals/new');
        meal = new Meal(req.body);
        meal.user = req.user._id;
        meal.save(function(err) {
            if (err) return res.redirect('/meals/new');
            res.redirect('/meals');
        });
    });
}

function show(req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        res.render("meals/show", {
            meal,
            title: "Details",
        });
    });
}

function edit(req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        res.render('meals/edit', { meal });
    });
}

function update(req, res) {
    Meal.findByIdAndUpdate(req.params.id, req.body, function (err, meal) {
        if (err) {
            res.render("meals/edit", { meal });
        }
        res.redirect("/meals");
    });
}