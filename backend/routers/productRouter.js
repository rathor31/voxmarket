const express = require('express');
const router = express.Router();
const Model = require('../models/productModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);
    }).catch((err)=>{
        res.status(500).json(err);
    })
});

router.get('/getall',(req,res)=>{
    Model.find({})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(result);
    });
    console.log(req.body);
});

router.get('/delete',(req,res)=>{
    res.send('delete responce from post router');
});

router.get('/update',(req,res)=>{
    res.send('update responce from post router');
});

module.exports= router;