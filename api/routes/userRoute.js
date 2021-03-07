const express = require('express');
const router = express.Router();

const { searchUser, addUser, updateUser } = require('../controllers/userController');
const userData = require('../model/userModel');

router.get('/', (req, res) => {
    res.status(200).json(userData)
});

router.get('/specific', (req, res) => {
    try {
        let userUd = req.body.username;
        console.log(userUd);
        const user = searchUser('username', userUd);
        res.status(200).json(user);
    } catch (error) {

        res.status(406).json({
            status: 'Fail',
            info: 'ERROR!! User Not Found'
        });
    }

})

router.get('/specific/:username', (req, res) => {
    try {
        let userUd = req.params.username;

        const user = searchUser('username', userUd);
        res.status(200).json(user);
    } catch (error) {

        res.status(406).json({
            status: 'Fail',
            info: 'ERROR!! User Not Found'
        });
    }

})



router.post('/addUser', (req, res) => {
    try {
        let user = req.body.user;
        addUser('uuid', user);
        res.status(200).json({
            status: 'Success',
            info: 'user added '
        });
    } catch (error) {
        res.status(406).json({
            status: 'Fail',
            info: 'ERROR!!: uuid is not unique '
        });
    }
});

router.put('/updateUser', (req, res) => {
    try {
        let oldUsername = req.body.username;
        let newUsername = req.body.newUsername;
        updateUser(oldUsername, newUsername);
        res.status(200).json({
            status: "Success",
            info: "Username Updated",
            updatedList: userData
        });
    } catch (error) {
        console.log(error);
        res.status(406).json({
            status: 'Fail',
            info: 'ERROR!!: User Not found'
        });
    }
});


module.exports = router;