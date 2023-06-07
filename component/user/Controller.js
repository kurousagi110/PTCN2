const serviceUser = require('./Service');

//get all user
const getAllUser = async () => {
    try {
        const users = await serviceUser.getAllUser();
        return users;
    } catch (error) {
        throw new Error("Error: getAllUser controller", error);
    }
};
//get user by id
const getUserById = async (id) => {
    try {
        const user = await serviceUser.getUserById(id);
        return user;
    } catch (error) {
        throw new Error("Error: getUserById controller", error);
    }
}
//add new user
const addUser = async (username, password, name, phonenumber) => {
    try {
        const user = await serviceUser.addUser(username, password, name, phonenumber);
        return user;
    } catch (error) {
        throw new Error("Error: addUser controller",error);
    }   
};
//update user
const updateUser = async (id, name, phonenumber) => {
    try {
        const user = await serviceUser.updateUser(id, name, phonenumber);
        return user;
    } catch (error) {
        throw new Error("Error: updateUser controller", error);
    }
};
//change password
const changePassword = async (username, oldpassword, newpassword) => {
    try {
        const user = await serviceUser.changePassword(username, oldpassword, newpassword);
        return user;
    } catch (error) {
        throw new Error("Error: changePassword controller", error);
    }
};
//set status
const setStatus = async (id, status) => {
    try {
        const user = await serviceUser.setStatus(id, status);
        return user;
    } catch (error) {
        throw new Error("Error: setStatus controller", error);
    }
};
//login 
const login = async (username, password) => {
    try {
        const user = await serviceUser.login(username, password);
        return user;
    } catch (error) {
        throw new Error("Error: login controller", error);
    }
};

module.exports = { getAllUser, getUserById, addUser, updateUser, changePassword, setStatus, login }