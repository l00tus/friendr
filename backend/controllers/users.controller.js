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
        console.log("Reached POST user controller");

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
        res.status(201).send("Successfully created.");
    },
    deleteUser: async (req, res) => {
        const userId = req.params.id;
        console.log("Reached DELETE user controller");

        await usersService.deleteUserById(userId);

        res.status(200).send("Successfully deleted.");
    },
    updateUser: async (req, res) => {
        const userId = req.params.id;
        const userUpdates = req.body;

        if( !userUpdates?.firstName ||
            !userUpdates?.lastName ||
            !userUpdates?.username
        ) {
            res.status(400).send("Invalid user object.");
            return;
        }

        console.log(userUpdates);
        const updatedUser = await usersService.updateUserById(userId, userUpdates);

        res.status(200).send("Successfully updated.")
    }
};

module.exports = usersController;