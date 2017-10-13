const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result)
// })

// Todo.findOneAndRemove
Todo.findOneAndRemove({ _id: '59e0b0d7a50b760bbdc217b1' }).then((todo) => {

})

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('59e0b0d7a50b760bbdc217b1').then((todo) => {
    console.log(todo);
});