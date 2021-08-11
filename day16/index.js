function animateShadow(event)
{
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // We get the position in the document for the text
    const textX = text.getBoundingClientRect().x;
    const textY = text.getBoundingClientRect().y;

    let deltaX  = textX - mouseX;
    let deltaY  = textY - mouseY;

    // Then we divide by the max height and with to get a value between 0 and 1
    // plus we multiplie by the step
    let shadowX = Math.round(deltaX / hero.offsetHeight * step);
    let shadowY = Math.round(deltaY / hero.offsetWidth  * step);

    console.log(shadowX, shadowY);

    text.style.textShadow = `${shadowX}px ${shadowY}px 0 var(--shadow-color)`
}

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const step = 30;

hero.addEventListener("mousemove", animateShadow)
