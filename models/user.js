const guid = require('guid');

let users = [
    {
        id: guid.create(),
        firstName: 'Mariela',
        lastName: 'Kasovska',
        age: 25
    },
    {
        id: guid.create(),
        firstName: 'Georgi',
        lastName: 'Alexandrov',
        age: 30
    }
];

module.exports = {
    getUsers: () => {
        return users;
    },

    addUser: (user) => {
        let newUser = Object.assign({}, user, { 
            id: guid.create() 
        });

        users.push(newUser);

        return users;   
    }
}