const express = require('express');
const bcryptjs = require('bcryptjs');
const session = require('express-session');
const passport = require('passport');
const passportL = require('passport-local');
const app = express();
// ejs ayudara con el front end
app.set('view engine', 'ejs'); 

//app.use(express.urlencoded({extended: true}));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

// Inicia en las rutas
app.use('/', require('./router.js'))


app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});