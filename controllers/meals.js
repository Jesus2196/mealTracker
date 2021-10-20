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
    Meal.find({}, function (err, meals) {
        res.render('meals/index', { meals: meals })
    }).sort("date");
}

function newMeal(req, res) {
    res.render('meals/new');
}

// function create(req, res) {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key];
//     }
//     let meal = new Meal(req.body);
//     meal.save(function (err) {
//         if (err) return res.redirect('/meals/new');
//         res.redirect('/meals');
//     });
// }

function create(req, res) {
    const meal = new Meal(req.body);
    meal.user = req.user._id;
    meal.save(function(err) {
        if (err) return res.redirect('/meals/new');
        res.redirect('/meals');
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

// function edit(req, res) {
//     Meal.findOne({_id: req.params.id, user: req.user._id}, function(err, meal) {
//         if (err || !meal) return res.redirect('/meals');
//         res.render('meals/edit', { meal });
//     });
// }

function update(req, res) {
    Meal.findByIdAndUpdate(req.params.id, req.body, function (err, meal) {
        if (err) {
            res.render("meals/edit", { meal });
        }
        res.redirect("/meals");
    });
}

// function update(req, res) {
//     Meal.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, {new: true},
//         function(err, meal) {
//             if (err || !meal) return res.render('meals/edit', { meal });
//             res.redirect('/meals');
//         });
// }