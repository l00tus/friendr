const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');


router.post('/', (req, res) => {
  usersController.createUser(req.body);
  res.status(201).send('Succesfully created');
});


router.get('/', (req, res) => {
    const reqUserId = req.query.id;
    res.status(404).send();
});

router.delete('/:id', (req, res) => {
    const reqUserId = req.params.id;
    usersController.deleteUser(reqUserId);
    res.status(200).send();
})

module.exports = router;