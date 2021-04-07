var express = require('express');
var userscontroller = require('./userController');

var router = express.Router();

// Home page route.
router.get('/user',userscontroller.getUsers)
router.get('/user/:id',userscontroller.getUsersById)
//router.post('/user',userscontroller.postUser)


module.exports = router;

//curl -X POST -F 'email=email@email.com' -F 'password=something' http://localhost:8000/api/user
//curl -X POST -F 'username=davidwalsh' -F 'password=something' http://domain.tld/post-to-me.php