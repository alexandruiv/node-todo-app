var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        // You can pass a parameeter to this function with the environment and change it to give you the proper connection string based on it;
        // you can have the environment as a setting in the environment variables within node.js
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@node-todo.vd9uz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    }
};