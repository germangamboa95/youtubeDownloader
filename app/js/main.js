console.log("I am here");


fetch('/api')
.then(res => res.json())
.then(data => console.log(data));


