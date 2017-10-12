var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.sendStatus(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos });
    }, (e) => {
        res.sendStatus(400).send(e);
    });
});

// GET /todos/123432
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.sendStatus(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.sendStatus(404).send();
        }
        res.send({ todo });
    }).catch((e) => {
        res.sendStatus(400).send();
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = { app };