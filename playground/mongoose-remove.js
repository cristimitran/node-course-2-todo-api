const { ObjectId } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

Todo.findByIdAndRemove('5afd957f97c1f8291cf64958').then((todo) => {
    console.log(todo)
})