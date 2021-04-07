var express = require('express');
var userscontroller = require('./userController');

var router = express.Router();

// user page route.
router.get('/user',userscontroller.getUsers)
router.get('/user/:id',userscontroller.getUsersById)
router.post('/user',userscontroller.postUser)
router.patch('/user/:id',userscontroller.patchUser)

module.exports = router;
