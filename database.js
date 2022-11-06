const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/doska_obiavlenia';

const option = {
    useNewUrlParser: true,
    useUniFiedTopology: true,
};

mongoose.connect(uri, option);

const db = mongoose.connection;

module.exports = db;
