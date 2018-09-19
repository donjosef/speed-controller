import data from './data.js';
const videos = data.categories[0].videos;
const videoTag = document.getElementById("video")

//First load of document
document.addEventListener("DOMContentLoaded", function() {
  const src = videos[0].sources.join();
  videoTag.src = src;
});
