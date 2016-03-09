/**
 * Created by amotevallian on 27/02/2016.
 */

import timesheetRouter from './timesheet/timesheet-controller.js';
import authRouter from './authentication/auth-controller.js';

const API_BASE_PATH = '/api';

function configRoutes(app) {
// routes
    app.use(API_BASE_PATH, userRouter);
    app.use(API_BASE_PATH, authRouter);
}

export default configRoutes;