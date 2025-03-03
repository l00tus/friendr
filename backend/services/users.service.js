const UserModel = require('../data/users.model')
const { v4: uuidv4 } = require('uuid');


const usersService = {
    getUserById: async (userId) => {
        const response = await UserModel.findOne( {id: userId} );
        return response;
    },
    getUserByUsername: async (username) => {
        const response = await UserModel.findOne( {username: username} , {firstName: 1, lastName: 1, _id: 0} );
        return response;
    },
    createUser: (userObj) => {
        console.log("Reached user service");
        console.log(userObj);

        userObj.id = uuidv4();
        const userToBeCreated = new UserModel(userObj);
        userToBeCreated.save().then(() => console.log('User created'))
    },
    deleteUserById: async (userId) => {
        const response = await UserModel.deleteOne( {id: userId}, {} );
        console.log(response);
        return response;
    },
    updateUserById: async (userId, userUpdates) => {
        const response = await UserModel.findOneAndUpdate( { id: userId}, userUpdates, { new: true} );
        console.log(response);
        return response;
    }
};

module.exports = usersService;