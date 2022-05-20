const express = require('express');
const routes = express.Router();


routes.post('/home',(req, res) => {
    console.log(req);
    res.send("oi");
});

module.exports = routes;