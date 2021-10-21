var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals');
const isLoggedIn = require('../config/auth');

router.get('/', mealsCtrl.index);
router.get('/new', isLoggedIn, mealsCtrl.new);
router.post('/', isLoggedIn, mealsCtrl.create);
router.get('/:id', isLoggedIn, mealsCtrl.show);
router.get('/:id/edit', isLoggedIn, mealsCtrl.edit);
router.put('/:id', isLoggedIn, mealsCtrl.update);
router.delete('/:id', isLoggedIn, mealsCtrl.delete);

module.exports = router;
