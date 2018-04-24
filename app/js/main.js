console.log("I am here");


fetch('/api')
.then(res => res.json())
.then(data => console.log(data));

document.addEventListener('submit', e => {
    e.preventDefault();
    console.log(e.target[0].value);
    let opts = {
        name: e.target[0].value
    }
    opts = JSON.stringify(opts)
    console.log(opts)
    fetch('/api', {
    headers: {
        'Content-Type': 'application/json'
      },
    method: 'post',
    body: opts
}).then(res => res.json())
.then(data => console.log(data));

});



