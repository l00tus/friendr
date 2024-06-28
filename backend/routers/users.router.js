const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/:id', usersController.getUser);
router.post('/', usersController.createUser);
router.delete('/:id', usersController.deleteUser);
router.put('/:id', usersController.updateUser);


module.exports = router;