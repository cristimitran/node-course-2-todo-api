var mongoose = require('mongoose')
var config = require('./config.json')

mongoose.Promise = global.Promise

var env = process.env.NODE_ENV || 'development';
console.log('env ****', env);

if(process.env.PORT){
    mongoose.connect(config.heroku.connect)
} else {
  process.env.PORT = 3000;
  if(env === 'development'){
    mongoose.connect(config.development.connect)
  } else if (env === 'test'){
    mongoose.connect(config.test.connect)
  }
}

module.exports = {
    mongoose
}