var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authentication');

function mongo(){
    this.User = mongoose.model('users', {name: String, key: String, nfc: String});
}

mongo.prototype.find = function(queryObj){
    //this.User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
    this.User.findOne(queryObj, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        } else {
            console.log('User not found!');
        }
    });
}

mongo.prototype.insert = function(newUserObj){
    //var newUser = new this.User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});
    var newUser = new this.User(newUserObj);
    newUser.name = newUser.name.toUpperCase();
    console.log(newUser);
    newUser.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', userObj);
        }
    });
}

mongo.prototype.update = function(queryObj){
    //User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
    User.findOne(queryObj, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);

        //For demo purposes lets update the user on condition.
        /*if (userObj.age != 30) {
            //Some demo manipulation
            userObj.age += 30;

            //Lets save it
            userObj.save(function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Updated', userObj);
                }
            });
        }*/
        } else {
            console.log('User not found!');
        }
    });
}

module.exports = new mongo();