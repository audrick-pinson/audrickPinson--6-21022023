const express = require('express');
const auth = require('auth');
const router = express.Router();

const userCtrl = require('../controllers/users');

router.post('/signup', auth, userCtrl.signup);
router.post('/login', auth, userCtrl.login);

module.exports = router;