const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');
const { encryptPassword, matchPassword } = require('../lib/helpers')

const pool = require('../database');



module.exports = router;