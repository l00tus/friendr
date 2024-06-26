const express = require('express');
const router = express.Router();

//TODO remove
const users = [
    {id: 1, firstName: "Forrest", lastName: "Gump"},
    {id: 2, firstName: "Hari", lastName: "Seldon"},
    {id: 3, firstName: "Tom", lastName: "Cruise"},
];

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(201).send('Succesfully created');
});


//req.query.id - de luat din query

router.get('/:id', (req, res) => {
    for(let i = 0 ; i < users.length ; i++) {
        if(users.at(i).id === parseInt(req.params.id)) {
            res.status(200).send(`te am gasit id-ule ${req.params.id} => ${users.at(i).firstName}`);
            return;
        }

        res.status(404).send('nu te am gasit');
    }
});

module.exports = router;