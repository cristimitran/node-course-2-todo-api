var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')

module.exports = {
    mongoose
}