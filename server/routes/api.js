const router = require('express').Router(); 
const video = require('../models/video.js');



router.post('/getVideo', (req, res) => {
    const url = req.body.data;
    console.log(url);
    new video(url).download();  

  const response = {
      "done" : true
  }
  res.json(response);
});


module.exports = router;