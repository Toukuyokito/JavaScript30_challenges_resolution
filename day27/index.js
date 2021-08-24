function toggleActive() {
    this.classList.toggle("active");
}

function moveItems(event) {
        
    event.preventDefault();
    if (event.buttons !== 1) return; 
        
    items.scrollLeft += event.movementX * -2;
}

const items = document.querySelector(".items")
items.addEventListener("mousedown", toggleActive);
items.addEventListener("mouseup",   toggleActive);
items.addEventListener("mousemove", moveItems);