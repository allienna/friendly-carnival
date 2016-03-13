var express = require('express');
var path = require('path');
var Todo = require('./models/todo');

function getTodos(response) {
    Todo.find(function(error, todos) {
        if(error) {
            response.send(error);
        }
        response.json(todos);
    });
}

function manageReturn(error, response) {
    if(error) {
        response.send(error);
    }
    getTodos(response);
}

module.exports = function(app) {
    app.get('/api/todos', function(request, response) {
        getTodos(response);
    });

    app.post('/api/todos', function(request, response) {
        var todo = new Todo({text: request.body.text});
        todo.save(function(error) {
            manageReturn(error, response);
        });
    });

    app.delete('/api/todos/:id', function(request, response) {
        Todo.remove({
            _id: request.params.id
        }, function(error) {
            manageReturn(error, response);
        })
    });

    // TODO How can I provide app/main.js without this trick
    app.get('/app/*', function(request, response) {
        response.sendFile(path.join(__dirname, request.params['0']));
    });

    // TODO How can I provide node_modules/* without this trick
    app.get('/node_modules/*', function(request, response) {
        response.sendFile(path.join(__dirname, 'node_modules', request.params['0']));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
    });
};
