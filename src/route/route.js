const express=require('express');
const blockChainController  = require('../controller/blockChainController');
const router=express.Router();

router.get("/assets",blockChainController.getblockChain)

router.all('/*', function (req, res) {
    res.status(400).send({ status: false, message: 'Invalid HTTP Request' });
})

module.exports=router;