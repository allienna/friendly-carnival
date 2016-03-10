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
};