// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const voice_select = document.getElementById('voice-select');
  const texts = document.getElementById('text-to-speak');
  const imgs = document.querySelector('img');
  const buttons = document.querySelector('button');
  
  // voice_select.addEventListener('change',function(){
  //   populateVoiceList();
  // });
  buttons.addEventListener('click',() => {
    const utterThis = new SpeechSynthesisUtterance(texts.value);
    const selectedOption = voice_select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      };
    };
    utterThis.addEventListener('start', () => {
      imgs.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener('end',() =>{
      imgs.src = "assets/images/smiling.png";
    });
    speechSynthesis.speak(utterThis);
  });

};
const voices = speechSynthesis.getVoices();
function populateVoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}




