const usersService = {
    createUser: (userObj) => {
        console.log("Reached user service");
        console.log(userObj);
    },
    deleteUser: (userId) => {
        console.log(`Deleted user ${userId} in service`);
    }
}

module.exports = usersService;