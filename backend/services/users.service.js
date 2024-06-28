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
    deleteUserById: async (userId) => {
        const response = await UserModel.deleteOne( {id: userId}, {} );
        console.log(response);
        return response;
    },
    updateUserById: async (userId, userUpdates) => {
        const response = await UserModel.findOneAndUpdate({ id: userId}, userUpdates, { new: true});
        console.log(response);
        return response;
    }
};

module.exports = usersService;