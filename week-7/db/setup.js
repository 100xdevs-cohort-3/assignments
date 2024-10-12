const { connection } = require("./connection");
const models = require("./modals");


const UserModel = connection.model('Users', models.User);
const TodoModel = connection.model('Todos', models.Todo);

module.exports = {
    UserModel,
    TodoModel
}