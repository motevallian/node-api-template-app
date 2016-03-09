'use strict';

import dbConf from '~/app/db.conf';

let mongoose = dbConf.mongoose;

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: String,
    username: String,
    password: String,
    defaultProject: Object
});

//Create the model object
let User = mongoose.model('users', UserSchema);

//Here we abstract database methods into more meaningful one which will be used in our services.
//We should not see .exec() in our service modules.
User.findByUsername = function(username) {
    return User.findOne({username: username}).exec();
};

User.findAllUsers = function() {
    return User.find().exec();
};

User.findByIdPromise = function(id) {
    return User.findById(id).exec();
};

export default User;