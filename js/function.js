let videos = document.querySelectorAll(".video");

// console.log(videos);

videos.forEach(video => {
  playVideoTeaserFrom(video, 1, 2);

  video.onmouseover = () => playVideo(video);
  video.onmouseleave = () => pauseVideo(video);
  video.onclick = () => playAndExpand(video);

});

function playAndExpand(video) {
  if (video.requestFullScreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullScreen) {
    video.webkitRequestFullscreen();
  }

  video.muted = false;
  video.volume = 0.8;
  return video.play();
}

function playVideo(video) {
  if (document.fullscreenElement) {
    document.fullscreenElement.muted = false;
    document.fullscreenElement.play();
  }
  if (document.webkitFullscreenElement) {
    document.webkitFullscreenElement.muted = false;
    document.webkitFullscreenElement.play();
  }
  if (document.mozFullScreenElement) {
    document.mozFullScreenElement.muted = false;
    document.mozFullScreenElement.play();
  }
  if (document.msFullscreenElement) {
    document.msFullscreenElement.muted = false;
    document.msFullscreenElement.play();
  }
  else {
    video.muted = true;
    video.play();
  }
}

function pauseVideo(video) {
  video.pause();
}

function playVideoTeaserFrom(video, startTime, endTime) {
  video.currentTime = startTime; //not sure if player seeks to seconds or milliseconds
  video.play();

  //call function to stop player after given intervall
  var stopVideoAfter = (endTime - startTime) * 1000;  //* 1000, because Timer is in ms
  setTimeout(function () {
    video.pause();
  }, stopVideoAfter);
}