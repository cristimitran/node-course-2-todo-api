//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectId('5abcf1a3f503a506a84a5aeb')
    // }, {
    //     $set: {
    //         completed: true      
    //     }
    // }, {
    //         returnOriginal: false
    //     }).then((result) => {console.log(result);});

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5abcdd23da6fa80780e4636f')
    }, {
        $set: {
            name: 'Cristi'      
        
    },
        $inc: {age: 1} 
    },{
            returnOriginal: false
        }).then((result) => {console.log(result);});


    //client.close();
});