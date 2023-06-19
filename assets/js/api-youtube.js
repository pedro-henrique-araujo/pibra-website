let getVideos = () => {
  fetch(
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCJLmKDAon_vCx-TolnZpmNw&maxResults=1&order=date&key=AIzaSyASgb3r_kT1K5U6ndtlPPT68_J8DLOnQTQ"
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      const firstVideo = data.items[0];
      const { videoId } = firstVideo?.id;

      if (!videoId) return;
      const ytVideoLink =
        "https://youtube.com/watch?v=" + firstVideo.id.videoId;
      document.querySelector("#yt-videos a").href = ytVideoLink;
      const { title } = firstVideo?.snippet;
      if (!title) return;
      const brLineTitle = title.replace(/\s\|\s/g, "<br />");
      console.log(brLineTitle);
      document.querySelector("#yt-videos #video-title").innerHTML = brLineTitle;
    });
};
