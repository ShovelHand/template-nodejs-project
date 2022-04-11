
import { Router } from 'express';
const router = Router();
function loggerMiddleware(request, response, next) {
    console.log(`${request.method} ${request}`);
    next();
}


router.get('/hello', async (req, res) => {
    res.send("Hello world!");
});

export default router;
//var sampleModel = require('../Models/sampleModel');
//var express = require('express');


//router.post('/', async (req, res) => {
//    const { name } = req.body;
//    const sample = new sampleModel({ name });
//    const ret = await sample.save();
//    res.json(ret);
//    res.send();
//});



