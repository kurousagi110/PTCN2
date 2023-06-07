var express = require('express');
var router = express.Router();

//add product
//http://localhost:3000/api/product/add
router.post('/add', async (req, res) => {
    try {
        const { name, user, phonenumber, banknumber, bankname, detail, images } = req.body;
        const product = await controllerProduct.addProduct(name, user, phonenumber, banknumber, bankname, detail, images);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});
//get all product
//http://localhost:3000/api/product/get-all
router.get('/get-all', async (req, res) => {
    try {
        const products = await controllerProduct.getAllProduct();
        if (products) {
            res.status(200).json({ result: true, product: products });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});
//get product by id
//http://localhost:3000/api/product/get-by-id/1
router.get('/get-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await controllerProduct.getProductById(id);
        if (!product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});

//delete product
//http://localhost:3000/api/product/delete/1
router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await controllerProduct.deleteProduct(id);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
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
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});

//add comment
//http://localhost:3000/api/product/add-comment
router.post('/add-comment', async (req, res) => {
    try {
        const { id, comment } = req.body;
        const product = await controllerProduct.addcomment(id, comment);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});

//delete comment
//http://localhost:3000/api/product/delete-comment
router.post('/delete-comment', async (req, res) => {
    try {
        const { id, comment } = req.body;
        const product = await controllerProduct.deletecomment(id, comment);
        if (product) {
            return res.status(200).json({ result: true, product: product });
        }
        return res.status(400).json({ result: false, product: null });
    } catch (error) {
        res.status(500).json({ result: false, product: null });
    }
});

module.exports = router;