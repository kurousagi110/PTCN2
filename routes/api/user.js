var express = require('express');
var router = express.Router();
const controllerUser = require('../../component/user/Controller');

//add user
//http://localhost:3000/api/user/add
router.post('/add', async (req, res) => {
    try {
        const { username, password, name, phonenumber } = req.body;
        console.log("addUser", username, password, name, phonenumber);
        const user = await controllerUser.addUser(username, password, name, phonenumber);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//get all user
//http://localhost:3000/api/user/get-all
router.get('/get-all', async (req, res) => {
    try {
        const users = await controllerUser.getAllUser();
        if (users) {
            return res.status(200).json({ result: true, user: users });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//get user by id
//http://localhost:3000/api/user/get-by-id/1
router.get('/get-by-id/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await controllerUser.getUserById(id);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//update user
//http://localhost:3000/api/user/update/1
router.post('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phonenumber } = req.body;
        const user = await controllerUser.updateUser(id, name, phonenumber);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//change password
//http://localhost:3000/api/user/change-password
router.post('/change-password', async (req, res) => {
    try {
        const { username, oldpassword, newpassword } = req.body;
        const user = await controllerUser.changePassword( username, oldpassword, newpassword );
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//set status
//http://localhost:3000/api/user/set-status/1
router.post('/set-status/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const user = await controllerUser.setStatus(id, status);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(400).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
//login
//http://localhost:3000/api/user/login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await controllerUser.login(username, password);
        if (user) {
            return res.status(200).json({ result: true, user: user });
        }
        return res.status(200).json({ result: false, user: null });
    } catch (error) {
        return res.status(500).json({ result: false, user: null });
    }
});
module.exports = router;