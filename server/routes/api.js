const router = require('express').Router(); 
const fs = require('fs');
const ytdl = require('ytdl-core');


router.get('/', (req, res) =>{
    console.log('HEY');
    res.json("Hello");
});



module.exports = router;