/**
 * Created by amotevallian on 27/02/2016.
 */


//TODO @Craig: Add the authentication logic in here. I reckon we should keep it simple for now.
import {Router} from 'express';
import authService from './auth-service';

let router = Router();

const LOGIN_URL = '/login';
const AUTHENTICATION_FAILED_STATUS = 401;

router.route(LOGIN_URL)
    .post((req, res) => {
        handleLoginRequest(req, res);
    });

/**
 * Assuming the user sends username and password via post, this method will logs the user in and if the login is
 * successful it adds the authToken returned from the login operation to the response header.
 * @param req
 * @param res
 */
function handleLoginRequest(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    authService.login(username, password)
        .then((token) => {
            res.append('authToken', token);
            res.json({
                username: username,
                id: token,
                hasProfile: false // This needs to be updated after the first login
            })
        }).catch(() => {
            res.sendStatus(AUTHENTICATION_FAILED_STATUS);
        });
}
export default router;
