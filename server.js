const express = require('express'); 
const bodyParser = require('body-parser')
const path = require('path');




const api = require('./server/routes/api.js');
const static = require('./server/routes/static.js');


// init
const app = express();

//  Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Routes 
app.use('/', express.static('app'));

app.use('/api', api);

app.use('*', static)



//  Error Catcher
app.use(function(error, req, res, next) {
    console.log(error);
    res.json({ message: error });
  });
  


//  Init Server
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if(err) throw err; 
    console.log("server is starting..")
});