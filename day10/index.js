function checkBetween(startIndex, stopIndex, value)
{
    for(let i = startIndex; i < stopIndex; i++) {
        checkboxes[i].checked = value;
    }
}

function multipleCheck(e)
{
    if (e.shiftKey && e.target.type === "checkbox" ) 
    {    
        checkboxClickedWithShiftKey.push(e.target);
    }

    if (checkboxClickedWithShiftKey.length === 2) {
        
        first = checkboxes.findIndex( child => child === checkboxClickedWithShiftKey[0]);
        last  = checkboxes.findIndex( child => child === checkboxClickedWithShiftKey[1]);

        if (first < last) 
            checkBetween(first + 1, last, checkboxes[first].checked);
        else 
            checkBetween(last + 1, first, checkboxes[last].checked);
            

        checkboxClickedWithShiftKey = [];

    }
}

const checkboxes = [...document.querySelectorAll(".inbox input[type=checkbox]")];
checkboxes.forEach(checkbox => addEventListener("click", multipleCheck));

let checkboxClickedWithShiftKey = [];


/*Only for the record*/
informationFieldShiftIsPressed = document.querySelector(".inbox .inject-for-record p");

window.onkeydown = function(e) {
    if(e.shiftKey) console.log(informationFieldShiftIsPressed.textContent = "Shift  pressed"); 
}

window.onkeyup = function(e) {
    if(!e.shiftKey) informationFieldShiftIsPressed.textContent = "Shift not pressed";
}