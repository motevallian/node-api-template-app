import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import uuid from 'node-uuid';
import configRoutes from './routes.js';
import dbConfig from './db.conf';

// Express.js
let app = express();

app.use((req, res, next) => {
	//NOTICE: In production this must be removed to only allow apps coming from a specific url to be
	//able to use this API.
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(session({
	genid: function(req) {
		return uuid.v1()
	},
	secret: 'chronos cat',
	resave: false,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// connect to db
dbConfig.connectToDB()
	.then(() => {
		console.log(`Connected to DB`);

		//  API - configuring all the endpoints API exposes.
		console.log('configuring routes');
		configRoutes(app);

		let listener = app.listen(process.env.PORT || 3000, () => {
			console.log(`Started on port ${listener.address().port}`);
		});
	});

export default app;
