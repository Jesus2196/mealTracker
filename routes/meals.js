var express = require('express');
var router = express.Router();
const mealsCtrl = require('../controllers/meals');
const isLoggedIn = require('../config/auth');

router.get('/', mealsCtrl.index);

module.exports = router;
