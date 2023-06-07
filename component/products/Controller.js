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
const addcomment = async (id, username, text) => {
    try {
        const product = await serviceProduct.addcomment(id, username, text);
        return product;
    } catch (error) {
        throw new Error("Error: addcomment controller", error);
    }
};
const deletecomment = async (id, idcomment) => {
    try {
        const product = await serviceProduct.deletecomment(id, idcomment);
        return product;
    } catch (error) {
        throw new Error("Error: deletecomment controller", error);
    }
};
//get product by namenuser
const getProductByNamenuser = async (name) => {
    try {
        const product = await serviceProduct.getProductByNamenuser(name);
        return product;
    } catch (error) {
        throw new Error("Error: getProductByNamenuser controller", error);
    }
};

module.exports = {getAllProduct, getProductById, addProduct, deleteProduct, addImage, addcomment, deletecomment, getProductByNamenuser};