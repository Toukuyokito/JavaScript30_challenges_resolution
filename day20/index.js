/**
 *  
 * @returns {SpeechRecognition | boolean<false>} return false is not compatible
 */
function setUpSpeechRecognition() {
    return window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || false; 
}

/**
 * 
 * @param {HTMLElement} targetNode 
 */
function displayErrorToUser(targetNode)
{
    if (!window.SpeechRecognition) {

        const div      = document.createElement("div");
        div.innerHTML  = ` <p>Ho noo 😢 your browser doesn't support speech recognition. 
                            <a href="https://caniuse.com/?search=SpeechRecognition" target=__blank>See here which navigator is compatible</a>
                        </p>`
        targetNode.insertBefore(div, targetNode.firstChild);
        div.style.backgroundColor = "white";
        
    }
}

if (!setUpSpeechRecognition())
{
    displayErrorToUser(document.querySelector("body"))
    window.stop()
    throw new Error("browser doesn't support speech recognition");
}

const words           = document.querySelector(".words");
const speech          =  new SpeechRecognition();
speech.interimResults = true;
speech.lang           ="fr-Fr"

let p = document.createElement("p");
words.appendChild(p);

speech.addEventListener("result", e => {
    
    const results = Array.from(e.results);
    p.textContent = results.map(speech => speech[0])
                      .map(text => text.transcript)
                      .join("");

    if (e.results[0].isFinal)
    {
        p = document.createElement("p");
        words.appendChild(p);
    }
});

speech.start();

speech.addEventListener("end", () =>{ 

    speech.start() 

});