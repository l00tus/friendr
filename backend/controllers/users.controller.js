const UserModel = require("../data/users.model");
const usersService = require("../services/users.service");

const usersController = {
    getUser: async (req, res) => {
        const userId = req.params.id;
        console.log("Reached GET user controller");
        console.log(userId);

        const userObj = await usersService.getUserById(userId);

        res.status(201).send(userObj);
    },
    createUser: async (req, res) => {
        const userToBeCreated = req.body;
        console.log("Reached user controller");

        //validate user object from req
        if( !userToBeCreated?.id ||
            !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.username
        ){
            res.status(400).send("Invalid user object.");
            return;
        }

        console.log(userToBeCreated);
        usersService.createUser(userToBeCreated);
    },
    deleteUser: async (req, res) => {
        console.log("Reached user controller");
        usersService.deleteUser(userId);
    }
};

module.exports = usersController;