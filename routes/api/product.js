var express = require('express');
var router = express.Router();
const controllerProduct = require('../../component/products/Controller');

//add product
//http://localhost:3000/api/product/add
router.post('/add', async (req, res) => {
    try {
        const { name, user, phonenumber, banknumber, bankname, detail, images } = req.body;
        console.log("user", user);
        const product = await controllerProduct.addProduct(name, user, phonenumber, banknumber, bankname, detail, images);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
//get all product
//http://localhost:3000/api/product/get-all
router.get('/get-all', async (req, res) => {
    try {
        const products = await controllerProduct.getAllProduct();
        if (products) {
            return res.status(200).json({ result: true, product: products });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
//get product by id
//http://localhost:3000/api/product/get-by-id/1
router.get('/get-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await controllerProduct.getProductById(id);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});

//delete product
//http://localhost:3000/api/product/delete/1
router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await controllerProduct.deleteProduct(id);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
//add image
//http://localhost:3000/api/product/add-image
router.post('/add-image', async (req, res) => {
    try {
        const { id, image } = req.body;
        const product = await controllerProduct.addImage(id, image);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});

//add comment
//http://localhost:3000/api/product/add-comment
router.post('/add-comment', async (req, res) => {
    try {
        const { id, username, text } = req.body;
        const product = await controllerProduct.addcomment(id, username, text);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});

//delete comment
//http://localhost:3000/api/product/delete-comment/1
router.post('/delete-comment/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { idcomment } = req.body;
        const product = await controllerProduct.deletecomment(id, idcomment);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null });
    }
});
//get product by nameuser
//http://localhost:3000/api/product/get-by-nameuser/1
router.get('/get-by-nameuser/:nameuser', async (req, res) => {
    try {
        const { nameuser } = req.params;
        const product = await controllerProduct.getProductByNamenuser(nameuser);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(200).json({ result: false, product: null });
    } catch (error) {
        return res.status(500).json({ result: false, product: null } + error);
    }
});

module.exports = router;