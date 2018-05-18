var mongoose = require('mongoose')

mongoose.Promise = global.Promise

if (process.env.MONGODB_URI) {
    mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')
} else {
    mongoose.connect('mongodb://localhost:27017/TodoApp')
}

//mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')

module.exports = {
    mongoose
}