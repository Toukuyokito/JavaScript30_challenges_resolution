function populateTargetList(platesList = [], target)
{
    target.innerHTML = platesList.map((plate, index) => {
        return `
        <li>
            <input type="checkbox" data-index="${index}" id="plate${index}" ${plate.done ? "checked=true": ""}"></input>
            <label for="plate${index}">${plate.name}</label>
        </li>`
    
    }).join("");
}    

function addItem(event) {

    //prevent page reloading
    event.preventDefault();
    const input = event.target.querySelector("[name=item]");

    const itemToAdd = {
        name: input.value,
        done: false
    }
    
    items.push(itemToAdd);
    localStorage.setItem("plates",  JSON.stringify(items));
    populateTargetList(items, itemsList);

    event.target.reset();
    
}

function toggleDone(event) {
    if(event.target.type != "checkbox") return;
    let index = parseInt(event.target.dataset.index);
    items[index].done = event.target.checked;
    
    localStorage.setItem("plates",  JSON.stringify(items));
    populateTargetList(items, itemsList);

}

const addItems  = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items     = JSON.parse(localStorage.getItem("plates")) || [];

populateTargetList(items, itemsList);
addItems.addEventListener("submit", addItem);

/*
Event delegation :
When an element is create after we can't listen an event for it. 
So we use the parent to listen the event
*/
itemsList.addEventListener("click", toggleDone);

