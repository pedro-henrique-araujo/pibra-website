let getVideos = () => {

    //Comentado pois excedeu limite de quotas, então foi criado um novo serviço.

    // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJLmKDAon_vCx-TolnZpmNw&maxResults=3&order=date&key=AIzaSyDspjMVFigKNnGt4uvCeBmkW3vFmKzZnUo')

    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJLmKDAon_vCx-TolnZpmNw&maxResults=3&order=date&key=AIzaSyASgb3r_kT1K5U6ndtlPPT68_J8DLOnQTQ')
    .then( (result) => {
        return result.json();
    } )
    .then( (data) => {
        let videos = data.items;
        let videoContainer = document.querySelector('.thumbnail-youtube')

        console.log(data)

        for( let video of videos ) {
            /*videoContainer.innerHTML += `
                <h3>${video.snippet.title}</h3>
                <img src = "${video.snippet.thumbnails.high.url}">
            `*/
        }
    } );
    console.log('API CARREGADA..')
}