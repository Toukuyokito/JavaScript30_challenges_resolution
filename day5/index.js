const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    
    panel.addEventListener("click", (e) => {
        panel.classList.toggle("open");
    });

    panel.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "flex-grow") return;
        e.target.classList.toggle("open-active");
    });

});