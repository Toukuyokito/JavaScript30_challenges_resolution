/**
 * 
 * @param {Array<SpeechSynthesis>} voicesArray 
 */
function populateSelect(voicesArray)
{
    voicesDropdown.innerHTML  = voicesArray.map((voice, i) => `<option value="${i}">${voice.name} ${voice.lang}</option>`)                   
                                           .join("");
}


const synth          = window.speechSynthesis;
const msg            = new SpeechSynthesisUtterance();
let voicesAvailable  = Array.from(synth.getVoices())
                            .sort((voiceA, voiceB) => voiceA.name > voiceB.name);

const voicesDropdown = document.querySelector('[name="voice"]');
voicesDropdown.addEventListener("input", (event) => msg.voice = voicesAvailable[event.target.value]);

populateSelect(voicesAvailable);

document.querySelector("[name=pitch]")
        .addEventListener("input", (event) => msg.pitch = event.target.value);

document.querySelector("[name=rate]")
        .addEventListener("input", (event) => msg.rate = event.target.value);

document.querySelector('#speak')
        .addEventListener("click", () => 
    {
        msg.text = document.querySelector("textarea").value;
        synth.speak(msg);

    });

document.querySelector('#stop').addEventListener("click", () => {if(synth.speaking) synth.cancel()});
