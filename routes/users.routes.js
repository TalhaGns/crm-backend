const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users.controllers');
const isAdmin = require('../auth/isAdmin');

router.get('/users', userControllers.getAllUsers);
router.get('/users/:id', userControllers.getSingleUserById);
router.get('/users/firstname/:firstname', userControllers.getSingleUserByFirstName);
router.get('/users/lastname/:lastname', userControllers.getSingleUserByLastName);
router.get('/users/email/:email', userControllers.getSingleUserByEmail);
router.get('/users/role/:roleid', userControllers.getSingleUserByRoleId);
router.post('/users', userControllers.createUser);
router.post('/users/login', userControllers.login);
router.put('/users/:id', userControllers.updateUser);
router.delete('/users/:id', userControllers.deleteUser);
router.put('/users/changepassword/:id', userControllers.changePassword)

module.exports = router;
