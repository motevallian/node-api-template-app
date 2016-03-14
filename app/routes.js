/**
 * Created by amotevallian on 27/02/2016.
 */

//import System from 'systemjs';
import fs from 'fs';
import _ from 'lodash';

const ROUTE_FILE_MATCHER = /controller\.js$/;
const API_BASE_PATH = '/api';

function configRoutes(app) {
// routes

    //return System.import('/Users/amotevallian/dev/node-api-template-app/app/user-management/user-controller.js')
    //    .then((loadedModule) => {
    //        console.log(`file loaded!! ${JSON.stringify(loadedModule)}`);
    //    }).catch((err) => {
    //        console.log(`err: ${err}`);
    //    });

    let routesFileList = getRoutesList(__dirname);
    return loadRoutes(routesFileList, app);

}

function loadRoutes(fileList, app) {
    let modulePromiseList = fileList.map((routeFile) => {
        return new Promise((resolve) => {
            let route = require(routeFile).default;
            app.use(API_BASE_PATH, route);
            resolve(route);
        });
    });

    return Promise.all(modulePromiseList);

}

function getRoutesList(dirName) {
    return _(fs.readdirSync(dirName))
        .flatMap((file) => {
            file = dirName + '/' + file;
            let stat = fs.statSync(file);

            if (stat && stat.isDirectory()) {
                return getRoutesList(file);
            } else if (file.match(ROUTE_FILE_MATCHER) !== null) {
                //let filenameNoSuffix = file.substring(0, file.lastIndexOf(ROUTE_FILE_SUFFIX));
                console.log(`filename: ${file}`);
                return [file];
            } else {
                return null;
            }
        }).filter((fileList) => {
            return fileList !== null;
        }).value();
}

export default configRoutes;

/*
 System.import(file).then((loadedRoute) => {
 app.use(API_BASE_PATH, loadedRoute);
 }).catch((err) => {
 console.log(`Error while loading file: ${file}.\n\n err: ${err}`);
 })
 */