const productModel = require("./userModel");

const getAllProduct = async () => {
    try {
        const users = await productModel.find();
        return users;
    } catch (error) {
        throw new Error("get all user error");
    }
};
const getProductById = async (id) => {
    try {
        const user = await productModel.findById(id);
        return user;
    } catch (error) {
        throw new Error("get user by id error");
    }
};

const addProduct = async (name, user, phonenumber, banknumber, bankname, detail, images) => {
    try {
        const newUser = new productModel({
            name: name,
            user: user,
            phonenumber: phonenumber,
            banknumber: banknumber,
            bankname: bankname,
            detail: detail,
            images: images,
            date: new Date(),
            status: {
                number: 1,
                text: "Đang chờ duyệt",
            },
        })
        await newUser.save();
        return newUser;
    } catch (error) {
        throw new Error("add user error");
    }
};
const deleteProduct = async (id) => {
    try {
        const user = await productModel.findByIdAndDelete(id);
        return true;
    } catch (error) {
        throw new Error("delete user error");
    }
}
const addImage = async (id, images) => {
    try {
        const user = await productModel.findByIdAndUpdate(id, { images: images });
        return user;
    } catch (error) {
        throw new Error("add image error");
    }
}
const addcomment = async (id, comment) => {
    try {
        const user = await productModel.findByIdAndUpdate(id, { comment: comment });
        return user;
    } catch (error) {
        throw new Error("add comment error");
    }
};
const deletecomment = async (id,comment) => {
    try {
        const user = await productModel.findByIdAndDelete(id, { comment: comment.username });
        return user;
    } catch (error) {
        throw new Error("delete comment error");
    }
};

module.exports = { getAllProduct, getProductById, addProduct, deleteProduct, addImage, addcomment, deletecomment };