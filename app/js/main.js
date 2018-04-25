window.onload = function() {
    document.getElementById('url-form').addEventListener('submit', (e) =>{
        e.preventDefault();
        const url = e.target[0].value;
        
        if(url) {
            createBanner('Success', 'success');
            requestVideo(url);
        } else {
            createBanner('Failure', "danger")
        }
        
        url.value = "";
    });




    function requestVideo(url) {
        const endPoint = '/api/getVideo';
        url = {
            data: url
        }

        fetch(endPoint, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(url)
        }).then(res => res.json())
        .then(data => console.log(data));
    
    }


    function createBanner(message, type){
        const html = 
        `
        <div class="alert alert-${type}" role="alert">
            ${message}
        </div>
        `;

       document.querySelector('.jumbotron').insertAdjacentHTML('afterend', html);
       const id = setTimeout(() => {
           //   Delete all the alerts on screen 
            Array.from(document.querySelectorAll('.alert')).forEach(item => item.style.display = 'none');
        }, 2500);
          
    }     
}