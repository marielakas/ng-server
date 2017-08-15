const UserModel = require('../models/user');

module.exports = {
    getUsers: (req, res) => {
        const users = UserModel.getUsers();

        res.status(200).json({
            results: users,
            errors: {}
        });
    },

    addUser: (req, res) => {
        const user = req.body;

        UserModel.addUser(user);

        res.status(201).end();
    }
};