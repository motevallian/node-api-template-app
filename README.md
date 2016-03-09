Express 4 & ES2015 REST API Boilerplate
==================================

This is a straightforward boilerplate for building REST APIs with ES2015 and Express 4.
This template uses latest ES2015 "import" syntax which is not yet supported by NodeJS.

- ES2015 support via [babel](https://babeljs.io)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)
- Object-Data Mapping via [Mongoose](https://github.com/Automattic/mongoose)

Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/node-api-template-app.git
cd node-api-template-app

# Make it your own
rm -rf .git && git init

# Run it
PORT=3000 npm start

# With nodemon:
PORT=3000 nodemon
```

License
-------

MIT
