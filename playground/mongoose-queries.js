const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '59de610d1b72ee4048397297';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// // Todo.find({
// //     _id: id
// // }).then((todos) => {
// //     console.log('Todos', todos);
// // });

// // Todo.findOne({
// //     _id: id
// // }).then((todo) => {
// //     console.log('Todo', todo);
// // });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

var id = '59de2634cf1e94ec36cf5ec2';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    console.log('User by id', user);
}, (e) => console.log(e));