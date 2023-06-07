const userModel = require("./Model");

const getAllUser = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        throw new Error("Error: getAllUser", error);
    }
};
const getUserById = async (id) => {
    try {
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        throw new Error("Error: getUserById", error);
    }
};

const addUser = async (username, password, name, phonenumber) => {
    try {
        const newUser = new userModel({
            username: username,
            password: password,
            name: name,
            phonenumber: phonenumber,
            status: 1,
        })
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error("Error: addUser", error);
    }
};
const updateUser = async (name,phonenumber) => {
    try {
        const user = await userModel.findById(id);
        if (name) {
            user.name = name || user.name;
            user.phonenumber = phonenumber || user.phonenumber;
            await user.save();
            return user;
        }
        return null;
    } catch (error) {
        throw new Error("Error: updateUser", error);
    }
};

const changePassword = async (username, password) => {
    try {
        const user = userModel.findOne({ username: username });
        if (user) {
            user.password = password;
            await user.save();
            return user;
        }    
        return null;
    } catch (error) {
        throw new Error("Error: changePassword", error);
    }
};

const setStatus = async (id, status) => {
    try {
        const user = userModel.findById(id);
        if (user) {
            user.status = status;
            await user.save();
            return user;
        }    
        return null;
    } catch (error) {
        throw new Error("Error: setStatus", error);
    }
};

module.exports = { getAllUser, getUserById, addUser, updateUser, changePassword, setStatus };