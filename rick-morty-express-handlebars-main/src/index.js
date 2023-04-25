const express = require('express')
const path = require('path');
const session = require('express-session')

const { database } = require('./keys')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);


// Routes


// Public
app.use(express.static(path.join(__dirname, 'public')));

// Sessions
app.use(flash());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialized());
app.use(passport.session());

app.use(session({
    secret: 'itesm502',
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port: ", app.get('port'))
});