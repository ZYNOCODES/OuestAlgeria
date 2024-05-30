require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usersroutes = require('./routes/users');
const indexroutes = require('./routes/index');
const placeroutes = require('./routes/places');
var path = require('path');
const bodyParser = require("body-parser");
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// Passport Config
require('./middleware/passport')(passport);

//express app
const app = express();

//midleware
const tempelatePath = path.join(__dirname, '/views')
const publicPath = path.join(__dirname, '/views/css')
console.log(publicPath);

app.set('view engine','ejs')
app.set('views',tempelatePath)

app.use(bodyParser.json())
app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
  
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
res.locals.success_msg = req.flash('success_msg');
res.locals.error_msg = req.flash('error_msg');
res.locals.error = req.flash('error');
next();
});

//routes
app.use('/', indexroutes); 
app.use('/user', usersroutes); 
app.use('/places', placeroutes);




//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connect to database and listening on port ', process.env.PORT);
        });
    }).catch((err) => {
        console.log('error connecting to db', err);
});

