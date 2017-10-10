//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59d7abf4c9054a594cae7957")
    }, {
        $set: {
            name: 'Lilica'
        }
    }, {
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    });

    // db.close();
});