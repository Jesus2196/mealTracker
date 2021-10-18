var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals');
const isLoggedIn = require('../config/auth');

router.get('/', mealsCtrl.index);
router.get('/new', mealsCtrl.new);
router.post('/', mealsCtrl.create);
router.get('/:id', mealsCtrl.show);

module.exports = router;
