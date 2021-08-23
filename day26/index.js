function showDropdown()
{
    const ulRect       = this.getBoundingClientRect();
    const dropdown     = this.querySelector(".dropdown");
   
    this.classList.add("trigger-enter");
    const dropdownRect = dropdown.getBoundingClientRect();
    
    dropdownBackground.style.transform = `translate(${dropdownRect.x}px, ${ulRect.y + window.scrollY + 10}px)`;
    dropdownBackground.style.width     = `${dropdownRect.width}px`;
    dropdownBackground.style.height    = `${dropdownRect.height}px`;
    dropdownBackground.classList.add("open");

    this.classList.add("trigger-enter-active");
 
}


function clearDropdown()
{
    this.classList.remove("trigger-enter");
    this.classList.remove("trigger-enter-active");
    dropdownBackground.classList.remove("open");

    dropdownBackground.style.width  = `${0}px`;
    dropdownBackground.style.height = `${0}px`;
}

const menu   = document.querySelector(".top");
const topics = menu.querySelectorAll("li");

const dropdownBackground = menu.querySelector(".dropdownBackground");
const arrow              = menu.querySelectorAll(".arrow");

topics.forEach(topic => topic.addEventListener("mouseover",  showDropdown));
topics.forEach(topic => topic.addEventListener("mouseleave", clearDropdown));
