/**
 * Created by amotevallian on 1/03/2016.
 */

import User from '~/app/user-management/user-model';

/**
 * A simple login impl (need to be replaced with a real one) which uses user-model module to retrieve
 * credentials of the provided username. If found and matched, resolves the resulting promise. Otherwise, rejects it.
 * @param username
 * @param password
 * @returns {Promise|Promise.<T>}
 */
function login(username, password) {
    console.log(`Atempt to login with {username: ${username}, password: ${password}}`);

    return User.findByUsername(username)
        .then((user) => {
            if (user.password === password) {
                return user._id;
            }
            return new Promise.reject('Unauthorised!');
        });
}

/**
 * This is a module to generate an access token for a given user. Must be replaced with a real implementation.
 * It should not require the password and must give a hash based on the username + date.
 * @param username
 * @param password
 * @returns {*}
 */
function generateToken(username, password) {
    //TODO: remove it and generate a hashed token.
   return username;
}

let authService = {
    login: login
};

export default authService;