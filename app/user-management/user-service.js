/**
 * Created by amotevallian on 27/02/2016.
 */

import User from './user-model';

//TODO: this is a sample and should be removed in the final app.
function findAllUsers() {
    return User.findAllUsers();
}

function createUser(username, password) {
    var user = new User();
    user.username = username;
    user.password = password;

    return user.save();
}

function getUserProfile(req, res) {
    setTimeout(function () {
        res.json({
            some: 'data'
        })
    }, 3000);
}

let userService = {
    findAllUsers: findAllUsers,
    createUser: createUser,
    getUserProfile: getUserProfile
};

export default userService;
