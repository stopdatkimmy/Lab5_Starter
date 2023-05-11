// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //const exposed = document.getElementById("expose");
  const hornchange = document.getElementById("horn-select");
  const volume_control = document.getElementById("volume-controls");
  const volume = document.getElementById("volume");
  const audio = document.querySelector("audio");
  const buttons = document.querySelector("button");
  const imgs = document.querySelector("img");
  const volimgs = volume_control.querySelector("img");
  
  hornchange.addEventListener('change',() => {
    if (hornchange.value == "air-horn"){
      audio.src = "./assets/audio/air-horn.mp3";
      imgs.src = "./assets/images/air-horn.svg";
    }
    else if (hornchange.value == "car-horn"){
     
      imgs.src = "./assets/images/car-horn.svg";
      audio.src = "./assets/audio/car-horn.mp3";
    }
    else if (hornchange.value == "party-horn"){
      imgs.src = "./assets/images/party-horn.svg";
      audio.src = "./assets/audio/party-horn.mp3";
    };

    });
  buttons.addEventListener('click', () => {
    audio.play();
    if (hornchange.value ==  'party-horn'){
      const jsconfetti = new JSConfetti();
      jsconfetti.addConfetti();

    }


  });
  volume.addEventListener('input',function(){
    changeinvolume(volume,audio,volimgs);
  });


}
function changeinvolume(volume,audio,volimgs){
  const volumes = volume.value;
  audio.volume = volumes/100;


  if (volumes == '0') {
    volimgs.src = "assets/icons/volume-level-0.svg";
   
  }
  else if (volumes < '33') {
    volimgs.src = "assets/icons/volume-level-1.svg";
  }
  else if (volumes < '67') {
    volimgs.src = "assets/icons/volume-level-2.svg";
  }
  else {
    volimgs.src = "assets/icons/volume-level-3.svg";
  }
}




//hornchange.addEventListener("change",changehorn);


 