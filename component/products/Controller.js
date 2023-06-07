const serviceProduct = require('./Service');

//get all product
const getAllProduct = async () => {
    try {
        const products = await serviceProduct.getAllProduct();
        return products;
    } catch (error) {
        throw new Error("Error: getAllProduct controller", error);
    }
};

//get product by id
const getProductById = async (id) => {
    try {
        const product = await serviceProduct.getProductById(id);
        return product;
    } catch (error) {
        throw new Error("Error: getProductById controller", error);
    }
};

//add new product
const addProduct = async (name, user, phonenumber, banknumber, bankname, detail, images) => {
    try {
        const product = await serviceProduct.addProduct(name, user, phonenumber, banknumber, bankname, detail, images);
        return product;
    } catch (error) {
        throw new Error("Error: addProduct controller",error);
    }   
}
//delete product
const deleteProduct = async (id) => {
    try {
        const product = await serviceProduct.deleteProduct(id);
        return product;
    } catch (error) {
        throw new Error("Error: deleteProduct controller", error);
    }
}  
//add image
const addImage = async (id, images) => {
    try {
        const product = await serviceProduct.addImage(id, images);
        return product;
    } catch (error) {
        throw new Error("Error: addImage controller", error);
    }
}
//add comment
const addcomment = async (id, comment) => {
    try {
        const product = await serviceProduct.addcomment(id, comment);
        return product;
    } catch (error) {
        throw new Error("Error: addcomment controller", error);
    }
};
const deletecomment = async (id, comment) => {
    try {
        const product = await serviceProduct.deletecomment(id, comment);
        return product;
    } catch (error) {
        throw new Error("Error: deletecomment controller", error);
    }
};

module.exports = {getAllProduct, getProductById, addProduct, deleteProduct, addImage, addcomment, deletecomment};