function mooveHighlight(event)
{
    const nodeRect = event.target.getBoundingClientRect();

    let y = nodeRect.top + window.scrollY;
    let x = nodeRect.left ;

    highlight.style.transform = `translate(${x}px, ${y}px)`;
    highlight.style.width     = `${nodeRect.width}px`;
    highlight.style.height    = `${nodeRect.height}px`;

}

document.querySelectorAll("a").forEach(link => link.addEventListener("mouseover", mooveHighlight));
const highlight = document.querySelector(".highlight");