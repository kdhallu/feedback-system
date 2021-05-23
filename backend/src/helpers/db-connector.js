const config = require('./../config');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString, function (err, data) {
    !err && console.log('mongo conected')
});
mongoose.Promise = global.Promise;

module.exports = {
    Feedback: require('./../models/Feedback'),
    Employee: require('./../models/Employee')
};
