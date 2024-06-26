const usersService = require("../services/users.service")

const usersController = {
    createUser: (userObj) => {
        console.log("Reached user controller");
        console.log(userObj);
        usersService.createUser(userObj);
    },
    deleteUser: (userId) => {
        console.log(`Deleted user with id: ${userId}`);
        usersService.deleteUser(userId);
    }
}

module.exports = usersController;