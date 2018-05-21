var mongoose = require('mongoose')

mongoose.Promise = global.Promise

// if (process.env.NODE_ENV === 'production') {
//     mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')
// } else if (process.env.NODE_ENV === 'development') {
//     process.env.PORT = 3000
//     mongoose.connect('mongodb://localhost:27017/TodoApp')
// } else if (process.env.NODE_ENV === 'test') {
//     process.env.PORT = 3000
//     mongoose.connect('mongodb://localhost:27017/TodoAppTest')
// }

//mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')

var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

if(process.env.PORT){
    mongoose.connect('mongodb://cristi:test@ds227740.mlab.com:27740/heroku-test')
} else {
  process.env.PORT = 3000;
  if(env === 'development'){
    mongoose.connect('mongodb://localhost:27017/TodoApp')
  } else if (env === 'test'){
    mongoose.connect('mongodb://localhost:27017/TodoAppTest')
  }
}

module.exports = {
    mongoose
}