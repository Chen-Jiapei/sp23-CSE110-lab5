// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectElement = document.getElementById("horn-select");

  selectElement.addEventListener("change", (event) => {
    if (event.target.value.localeCompare("select") == 0) {
      document.querySelector("img").src = `assets/images/no-image.png`;
    } else {
      document.querySelector("img").src = `assets/images/${event.target.value}.svg`;
      document.querySelector("audio").src = `assets/audio/${event.target.value}.mp3`;
    }
  });

  let volumeEvent = document.getElementById("volume");

  volumeEvent.addEventListener("change", (event) => {
    if (event.target.value == 0) {
      document.querySelector("div > img").src = `assets/icons/volume-level-0.svg`;
    }
    else if (event.target.value < 33) {
      document.querySelector("div > img").src = `assets/icons/volume-level-1.svg`;
    } 
    else if (event.target.value < 67){
      document.querySelector("div > img").src = `assets/icons/volume-level-2.svg`;
    }
    else {
      document.querySelector("div > img").src = `assets/icons/volume-level-3.svg`;
    }
    document.querySelector("audio").volume = event.target.value / 100;
  });

  let buttonEvent = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  buttonEvent.addEventListener("click", (event) => {
    if (document.getElementById("horn-select").value.localeCompare("party-horn") == 0) {
      jsConfetti.addConfetti();
    }
    
    document.querySelector("audio").play();
  })
}
