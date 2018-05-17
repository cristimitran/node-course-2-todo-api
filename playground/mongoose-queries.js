const { ObjectId } = require('mongodb')
const { mongoose } = require('./../server/db/mongoose')
const { Todo } = require('./../server/models/todo')
const { User } = require('./../server/models/user')

//var id = '5afd88ab8ae9ca1a2034b82b11'

// if(!ObjectId.isValid(id)) {
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo by id', todo)
// }).catch((e) => console.log(e))

var userId = '5afd6ae406e645202c1498b3'

User.findById(userId).then((result) => {
    if (!result) {
        return console.log('User not found')
    }
    console.log(JSON.stringify(result, undefined, 2))
}).catch((e) => console.log(e))