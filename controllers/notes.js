const Meal = require('../models/meal');

module.exports = {
    create,
    delete: deleteNote,
}

function create(req, res) {
    Meal.findById(req.params.id, function (err, meal) {
        req.body.userId = req.user._id;
        meal.notes.push(req.body);
        meal.save(function (err) {
            res.redirect(`/meals/${meal._id}`);
        });
    });
}

function deleteNote(req, res) {
    Meal.findOne({'notes._id': req.params.id, 'notes.userId': req.user._id },
    function (err, meal) {
        meal.notes.remove(req.params.id);
        meal.save(function(err) {
            res.redirect(`/meals/${meal._id}`);
        });
    });
}