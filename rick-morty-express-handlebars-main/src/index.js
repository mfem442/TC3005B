const express = require('express')
const path = require('path');


const { database } = require('./keys')

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);


// Routes


// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port: ", app.get('port'))
})