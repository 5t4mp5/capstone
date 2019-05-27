const router = require('express').Router();
const { Family } = require('../db/models');

//get all families
router.get('/families', (req, res, next) => {
    Family.findAll()
        .then(families => res.send(families))
        .catch(next)
});

//get family by id
router.get('/families/:id', (req, res, next) => {
    Family.findByPk(req.params.id)
        .then(family => res.send(family))
        .catch(next)
});

module.exports = router;
