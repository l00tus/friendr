const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

//de schimbat in /:id
router.get('/', (req, res) => {
  const reqUserId = req.query.id;
  res.status(200).send();
});

router.post('/', (req, res) => {
  usersController.createUser(req.body);
  res.status(201).send('Succesfully created');
});

router.delete('/:id', (req, res) => {
    const reqUserId = req.params.id;
    usersController.deleteUser(reqUserId);
    res.status(200).send();
});

module.exports = router;