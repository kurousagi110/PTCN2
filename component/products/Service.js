const productModel = require("./Model");

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
        console.log(user);
        return user;
    } catch (error) {
        throw new Error("get user by id error");
    }
};

const addProduct = async (name, user, phonenumber, banknumber, bankname, detail, images) => {
    try {
        const newUser = await productModel.create({ 
            name: name, user: user, phonenumber: phonenumber, 
            banknumber: banknumber, bankname: bankname, 
            detail: detail, images: images ,
            date : new Date(),
            status: { number: 1, text: "Đang chờ duyệt" }});
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
const addcomment = async (id, username, text) => {
    try {
        console.log(id);
        console.log(username);
        console.log(text);
        const user = await productModel.findById(id);
        if (user) {
            user.comment.push({ username: username, text: text });
            await user.save();
        }
        return await productModel.findById(id);
    } catch (error) {
        throw new Error("add comment error");
    }
};
const deletecomment = async (id,idcomment) => {
    try {
        const user = await productModel.findById(id);
        for (let i = 0; i < user.comment.length; i++) {
            if (user.comment[i]._id == idcomment) {
                user.comment.splice(i, 1);

                await user.save();
                return await productModel.findById(id);
            }
        }
        return false;
    } catch (error) {
        throw new Error("delete comment error");
    }
};
//get product by nameuser
const getProductByNamenuser = async (name) => {
    try {
        const product = await productModel.find();
        let product1 = [];
        for (let i = 0; i < product.length; i++) {
            if (product[i].user.nameuser == name) {
                product1.push(product[i]);
            }
        }
        return product1;
    } catch (error) {
        throw new Error("get user by name error");
    }
};

module.exports = { getAllProduct, getProductById, addProduct, deleteProduct, addImage, addcomment, deletecomment, getProductByNamenuser };