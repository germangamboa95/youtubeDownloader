const express = require('express'); 
const fs = require('fs');
const ytdl = require('ytdl-core');
const bodyParser = require('body-parser')
const path = require('path');

//  MW init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// API routes 
const test =   {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
}
app.get('/api', (req, res) =>{
    console.log('HEY');
    res.json(test);
});

app.post('/api', (req, res) => {

    ytdl(req.body.name)
  .pipe(fs.createWriteStream('./app/video.mp4'))
  .on('finish', () =>{
    console.log('finished');
    res.json(req.body)

  });

});

// Static files

app.use('/', express.static('app'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/app/index.html'));



});

app.use(function(error, req, res, next) {
    // Any request to this server will get here, and will send an HTTP
    // response with the error message 'woops'
    console.log(error);
    res.json({ message: error });
  });
  
const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) throw err; 
    console.log("server is starting..")
});