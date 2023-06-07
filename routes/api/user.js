var express = require('express');
var router = express.Router();
const controllerUser = require('../../component/user/Controller');

//add user
//http://localhost:3000/api/user/add
router.post('/add', async (req, res) => {
    try {
        const { username, password, name, phonenumber } = req.body;
        const user = await controllerUser.addUser(username, password, name, phonenumber);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
//get all user
//http://localhost:3000/api/user/get-all
router.get('/get-all', async (req, res) => {
    try {
        const users = await controllerUser.getAllUser();
        if (users) {
            res.status(200).json({ result: true, user: users });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
//get user by id
//http://localhost:3000/api/user/get-by-id/1
router.get('/get-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await controllerUser.getUserById(id);
        if (!user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
//update user
//http://localhost:3000/api/user/update/1
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phonenumber } = req.body;
        const user = await controllerUser.updateUser(id, name, phonenumber);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
//change password
//http://localhost:3000/api/user/change-password
router.put('/change-password', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await controllerUser.changePassword(username, password);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
//set status
//http://localhost:3000/api/user/set-status/1
router.put('/set-status/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const user = await controllerUser.setStatus(id, status);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        res.status(500).json({ result: false, user: null });
    }
});
module.exports = router;