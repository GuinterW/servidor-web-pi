var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

function mongo(){
    this.User = mongoose.model('User', {name: String, roles: Array, age: Number});
}

mongo.prototype.find = function(){
    this.User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);
        } else {
            console.log('User not found!');
        }
    });
}

mongo.prototype.insert = function(){
    var user1 = new this.User({name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']});
    user1.name = user1.name.toUpperCase();
    console.log(user1);
    user1.save(function (err, userObj) {
        if (err) {
            console.log(err);
        } else {
            console.log('saved successfully:', userObj);
        }
    });
}

mongo.prototype.update = function(){
    User.findOne({name: 'MODULUS ADMIN'}, function (err, userObj) {
        if (err) {
            console.log(err);
        } else if (userObj) {
            console.log('Found:', userObj);

        //For demo purposes lets update the user on condition.
        if (userObj.age != 30) {
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
        }
        } else {
            console.log('User not found!');
        }
    });
}

module.exports = new mongo();