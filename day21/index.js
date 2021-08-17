const getPositionButton = document.querySelector("button");
const a = document.querySelector("a");

function succesGetPosition(data)
{
    a.href = `https://www.openstreetmap.org/search?query=48%2C-3#map=10/${data.coords.latitude}/${data.coords.longitude}`;
    a.textContent = "See your position at OpenStreetMap";
}

function failedGetPosition(err)
{
    console.error(err);
}

getPositionButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(succesGetPosition, 
                                             failedGetPosition, 
                                             {enablehighaccuracy : true, maximumage:45000, timeout: 30000});

});