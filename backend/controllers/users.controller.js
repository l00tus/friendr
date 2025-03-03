const UserModel = require("../data/users.model");
const usersService = require("../services/users.service");

const usersController = {
    getUserByUsername: async (req, res) => {
        const username = req.params.username;

        const userObj = await usersService.getUserByUsername(username);

        if(!userObj) {
            res.status(404).send({ error: "User not found." });
            return;
        }

        res.status(200).send(userObj);
    },
    createUser: async (req, res) => {
        const userToBeCreated = req.body;
        console.log("Reached POST user controller");

        //validate user object from req
        if( !userToBeCreated?.firstName ||
            !userToBeCreated?.lastName ||
            !userToBeCreated?.username
        ){
            res.status(400).send({ error: "Invalid user object." });
            return;
        }

        console.log(userToBeCreated);
        usersService.createUser(userToBeCreated);
        res.status(201).send({ message: "Successfully created." });
    },
    deleteUser: async (req, res) => {
        const userId = req.params.id;
        console.log("Reached DELETE user controller");

        await usersService.deleteUserById(userId);

        res.status(200).send({ message: "Successfully deleted." });
    },
    updateUser: async (req, res) => {
        const userId = req.params.id;
        const userUpdates = req.body;

        if( !userUpdates?.firstName ||
            !userUpdates?.lastName ||
            !userUpdates?.username
        ) {
            res.status(400).send({ error: "Invalid user object." });
            return;
        }

        console.log(userUpdates);
        const updatedUser = await usersService.updateUserById(userId, userUpdates);

        res.status(200).send({ message: "Successfully updated." });
    }
};

module.exports = usersController;