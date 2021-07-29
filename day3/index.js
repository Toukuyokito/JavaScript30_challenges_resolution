const blurButton    = document.getElementById("blur");
const spacingButton = document.getElementById("spacing");
const baseColor     = document.getElementById("base");


blurButton.addEventListener("input", (e) => {
    const unite = e.target.dataset.unite || "px";
    const value = e.target.value || 0;
    document.documentElement.style.setProperty(`--${e.target.name}`, `${value}${unite}`)
});


spacingButton.addEventListener("input", (e) => {
    const unite = e.target.dataset.unite || "px";
    const value = e.target.value;
    document.documentElement.style.setProperty(`--${e.target.name}`, `${value}${unite}`)
});


baseColor.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}`)
});
