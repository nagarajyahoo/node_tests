const db = require('./db.js');

var signUp = (email, password) => {
    //check email if exists
    //if not save the user

    db.saveUser({
        "username" : email,
        "password" : password
    });
};


module.exports = {
    signUp : signUp
};

// signUp('nrudrappa@gmail.com', 'nmr@123');