const userModel = require("./Model");

const getAllUser = async () => {
    try {
        const users = await userModel.find();
        console.log("getAllUser", users);
        if (users) {
            return users;
        }
        return null;
    } catch (error) {
        throw new Error("Error: getAllUser", error);
    }
};
const getUserById = async (id) => {
    try {
        console.log(id);
        const user = await userModel.findById(id);
        return user;
    } catch (error) {
        throw new Error("Error: getUserById", error);
    }
};

const addUser = async (username, password, name, phonenumber) => {
    try {
        const check = await userModel.findOne({ username: username });
        if (check) {
            return false;
        } else {
            const user = await userModel.create({ username: username, password: password, name: name, phonenumber: phonenumber });
            await user.save();
            return user;
        }
    } catch (error) {
        throw new Error("Error: addUser", error);
    }
};
const updateUser = async (id, name, phonenumber) => {
    try {
        const user = await userModel.findById(id);
        console.log(id, name, phonenumber)
        if (user) {
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

const changePassword = async (username, oldpassword, newpassword) => {
    try {
        const user = await userModel.findOne({ username: username });
        console.log(user);
        if (user) {
            if (user.password == oldpassword) {
                user.password = newpassword || user.password;
                await user.save();
                return user;
            }
            return false;
        }
        return false;
    } catch (error) {
        throw new Error("Error: changePassword", error);
    }
};

const setStatus = async (id, status) => {
    try {
        const user = await userModel.findById(id);
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

//login
const login = async (username, password) => {
    try {
        const user = await userModel.findOne({ username: username, password: password });
        if (user) {
            return user;
        }
        return null;
    } catch (error) {
        throw new Error("Error: login", error);
    }
};

module.exports = { getAllUser, getUserById, addUser, updateUser, changePassword, setStatus, login };