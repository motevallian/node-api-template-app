/**
 * Created by amotevallian on 28/02/2016.
 */

import mongoose from 'mongoose';

// Set mongoose Promise lib to the native NodeJS one.
mongoose.Promise = global.Promise;

// Setting up a connection
const DB_NAME = process.env.DB_NAME     || 'dbName';
const HOST    = process.env.DB_HOST     || 'localhost';
const PORT    = process.env.MONGO_PORT  || '27017';

//The database configurator
let dbConfig;
dbConfig = {
	connectToDB: () => {
		return new Promise((resolve, reject) => {
			mongoose.connect('mongodb://' + HOST + ':' + PORT + '/' + DB_NAME)
				.then((conn) => {
					resolve(conn);
				}, (err) => {
					reject(err);
				});
		});
	},
	//This is very important as it provides other modules with the promisified mongoose.
	mongoose: mongoose
};

export default dbConfig;