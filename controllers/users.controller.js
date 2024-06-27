const usersService = require("../services/users.service");

const usersController = {
    createUser: (userObj) => {
        console.log("Reached user controller");
        console.log(userObj);
        usersService.createUser(userObj);
    },
    deleteUser: (userId) => {
        console.log("Reached user controller");
        usersService.deleteUser(userId);
    }
};

module.exports = usersController;