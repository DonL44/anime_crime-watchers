const passport = require('passport');
const LocalStrategy = require('passportlocal').Strategy;
passport.use(new LocalStrategy());

var db = require('../models')
passport.use(new LocalStrategy( 
{
    emailField: 'email'
},
function(email, password, done){
    db.User.findOne({
        where: {email: email}
    })
}
    
));
