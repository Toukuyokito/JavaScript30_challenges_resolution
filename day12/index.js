
function win()
{
    const title = document.querySelector("h1");
    title.style.animation = "graduate-hue 1s ease-in-out infinite";
    title.style.display = "block";
    title.textContent = "Win";
}


window.addEventListener("keyup", e => {
    userEntry.push(e.key);
    index = userEntry.length - 1;

    if (e.key !== mySecretCode[index]) userEntry = []; 

    //Only for record ctrl + r is the shortcut for simpleScreenRecorder
    if(e.key !== "Control" && e.key !== "r")reccordBuffer.push(e.key);
    p.textContent = `Only for record : secret code is ${mySecretCode.join("")}, user is typing : ${reccordBuffer.join("")}`;


    if(mySecretCode.length === userEntry.length) {
        win();
    }

});

//Only for record
const p = document.querySelector("p");

const mySecretCode = "hello".split("");
let userEntry      = [];
let reccordBuffer = [];
p.textContent = `Only for record : secret code is ${mySecretCode.join("")}, user is typing : ${reccordBuffer.join("")}`;
