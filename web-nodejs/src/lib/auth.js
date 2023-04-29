const pool = require('../database.js')
module.exports = {
    
    isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/signin');
        }
    },

    isNotLoggedIn(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/profile');
        }
    },

    async existUser(req, res, next) {
        pool.query(
            "SELECT * FROM user WHERE BINARY username = ?", 
            [req.body.username], 
            function(error, results, fields) {

            if(error) {
                console.log("error")
            }
            else if (results.length > 0){
                res.redirect('/signin')
            }
            else {
                next()
            }
        })
    }

}

