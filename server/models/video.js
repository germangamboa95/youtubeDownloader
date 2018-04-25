const fs = require('fs');
const ytdl = require('ytdl-core');

class video {
    constructor(url){
        this.url = url;
    }
    
    download() {
        console.log('I was called')
        ytdl(this.url)
        .pipe(fs.createWriteStream('app/assets/videos/videoqw.mp4'))
        .on('info', info => {
            console.log(info);
        });
    }
}

module.exports = video;