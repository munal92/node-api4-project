const express = require('express');

const dataToDo = require('./data.js');

const router = express.Router();
router.use(express.json());


router.use((req,res,next) => {
    console.log('TODO Router Working');
    next();
})

router.get('/', (req,res) => {
    res.status(200).json({message: 'api working'})
})











  module.exports = router;