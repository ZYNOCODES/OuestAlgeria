const Article = require('../models/ArticleModel');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//jwt secret
const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET_KEY, {expiresIn: '7d'});
}
//login
const Login = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/user/Admin',
        failureRedirect: '/user/login',
        failureFlash: true
      })(req, res, next);
}   

//signup
const Signup = async (req, res) => {
    const { email, password} = req.body;
    try{
        const user = await User.signup(email, password);
        const token = createToken(user._id);
        res.status(200).json({email,token});
        
    }catch(err){
        res.status(400).json({err: err.message});
    }
}

module.exports = {
    Login,
    Signup,
}