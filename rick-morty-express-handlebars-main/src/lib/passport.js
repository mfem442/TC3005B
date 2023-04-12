const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const pool = require('../database')
const { encryptPassword, matchPassword } = require('../lib/helpers')

// SignIn


// SignUp


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
    done(null, rows[0]);
})