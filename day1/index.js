/* 
Auteur : Cédric Le Gall
Challenge 1 JavaScript30
Solution personelle
*/


window.addEventListener("keyup", (e) =>{
    
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    
    if (!audio) return;
    
    const key = document.querySelector(`.key[data-key=${e.key}]`)
    key.classList.add("playing");
    
    audio.currentTime = 0;
    audio.play();
    

});


keys = document.querySelectorAll(".key")
for(let key of keys) {

    key.addEventListener("transitionend", (e) => {

        if (e.type !== "transitionend") return;
        e.target.classList.remove("playing")
    });

}