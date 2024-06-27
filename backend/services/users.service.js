const UserModel = require('../data/users.model')

const usersService = {
    getUserById: async (userId) => {
        const response = await UserModel.findOne( {id: userId}, {} );
        return response;
    },
    createUser: (userObj) => {
        console.log("Reached user service");
        console.log(userObj);

        const userToBeCreated = new UserModel(userObj);
        userToBeCreated.save().then(() => console.log('User created'))
    },
    deleteUser: (userId) => {
        console.log(`Deleted user ${userId} in service`);
    }
};

module.exports = usersService;