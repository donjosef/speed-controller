import data from './data.js';
const videos = data.categories[0].videos;
const videoTag = document.getElementById("video");
const control = document.querySelector(".control");
const bar = document.querySelector(".bar");

//First load of document
document.addEventListener("DOMContentLoaded", function() {
  const src = videos[0].sources.join();
  videoTag.src = src;
});

//change width of bar dinamically
control.addEventListener("mousemove", function(e) {
  const x = e.pageX - this.offsetLeft; //position of mouse relative to bar
  const percent = x / this.offsetWidth; //between 0 and 1
  const speed = Number(percent * 4).toFixed(1);
  videoTag.playbackRate = Number(speed);
  bar.textContent = speed + "x";
  bar.style.width = percent * 100 + "%";
});

const changeVideo = (function() {
  let index = 0;
  return {
    next: function() {
      if(index < videos.length - 1 ) {
        index++;
        console.log(index)
        const src = videos[index].sources.join();
        console.log(src);
        videoTag.src = src;

      }
    },
    prev: function() {
      if(index > 0) {
          index--;
          console.log(index)
          const src = videos[index].sources.join();
          console.log(src);
          videoTag.src = src;
      }
    }
  };
})();

document.querySelector(".next").addEventListener("click", () => changeVideo.next());
document.querySelector(".prev").addEventListener("click", () => changeVideo.prev());
