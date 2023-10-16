const express = require('express');
const {
    Login,
    Signup,
    GetAllArticles,
    GetArticle, 
    CreateNewArticle,
    DeleteArticle,
    UpdateArticle
} = require('../controllers/UserController');
const { forwardAuthenticated } = require('../middleware/auth');

const router = express.Router();

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => 
    res.render('login')
);

// Login
router.post('/login', Login);

// Logout
router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('success_msg', 'You are logged out');
        res.redirect('/user/login');
    });
});

  
//signup
router.post('/signup', Signup);

module.exports = router;