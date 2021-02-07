require('dotenv').config();

const Bundler = require('parcel-bundler');
const app = require('express')();

const file = 'index.html';
const options = { 
    cache: false,
    sourceMaps: true
};

const bundler = new Bundler(file, options);

app.use(bundler.middleware());

app.listen(5000, () => {
    console.log("Server Started: 5000")
});