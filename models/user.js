const guid = require('guid');

const firstUserGuid = guid.create();

let users = {
    [firstUserGuid]: {
        id: firstUserGuid,
        firstName: 'Mariela',
        lastName: 'Kasovska',
        age: 25
    }
};

module.exports = {
    getUsers: () => {
        return users;
    },

    addUser: (user) => {
        const newUserGuid = guid.create();
        
        users[newUserGuid] = Object.assign({}, user, { 
            id: newUserGuid
        });

        return users;   
    }
}