function deal_with_unite_button(e)
{
    const unite = e.target.dataset.unite || "px";
    const value = e.target.value || 0;
    document.documentElement.style.setProperty(`--${e.target.name}`, `${value}${unite}`);
}

const blurButton = document.getElementById("blur");
blurButton.addEventListener("input", (e) => {
    deal_with_unite_button(e);
});


const spacingButton = document.getElementById("spacing");
spacingButton.addEventListener("input", (e) => {
    deal_with_unite_button(e);
});


const baseColor = document.getElementById("base");
baseColor.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(`--${e.target.name}`, `${e.target.value}`);
});
