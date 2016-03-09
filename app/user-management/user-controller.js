/**
 * Created by amotevallian on 27/02/2016.
 */


//TODO: WE have to modify our API to abstract low-level operations
import {Router} from 'express';
import userService from './user-service';

let router = Router();

const USERS_URL = '/users';
const USER_ID_URL = USERS_URL + '/:user_id';
const USER_PROFILE_URL = '/profile/:user_id';

router.route(USERS_URL)
    .get((req, res) => {
        userService.findAllUsers()
            .then((users) => {
                res.json(users);
            });
    })
    .post((req, res, next) => {
        userService.createUser(req.body.username, req.body.password)
            .then(() => {
                res.sendStatus(200);
            }).catch((err) => {
                res.sendStatus(500);
            });
    });

router.route(USER_ID_URL)
    .get((req, res, next) => {
        userService.findUserById(req.params.userId, {username: 1});
    })
    .put((req, res, next) => {
        userService.updateUser(req.params.userId, userService.getUserFromBody(req.body));
    })

    .delete((req, res, next) => {
        userService.removeUser(req.params.userId);
    });

router.route(USER_PROFILE_URL)
    .get((req, res, next) => {
        userService.getUserProfile(req.params.userId, res);
    });

export default router;
