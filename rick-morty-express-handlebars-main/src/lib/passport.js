const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy

const pool = require('../database')
const { encryptPassword, matchPassword } = require('../lib/helpers')

passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const rows = await pool.query("SELECT * FROM User WHERE BINARY username = ?", [username])
    if (rows.length > 0) {
        const user = rows[0];
        const validPassword = await matchPassword(password, user.password)
        if (validPassword) {
            done(null, user, req.flash('success', 'Bienvenido ' + user.username));
        } else {
            done(null, false, req.flash('message','Contraseña Incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message','Usuario no encontrado'));
    }

}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM User WHERE id = ?', [id]);
    done(null, rows[0]);
})