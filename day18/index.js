
/**
 * 
 * @param   {float} seconds 
 * @returns {String} "hours:minutes:seconds"
 */
function secondsToHMS(seconds)
{
    const hours = Math.floor(seconds / 3600);
    seconds     = seconds % 3600;

    const minutes = Math.floor(seconds / 60);
    seconds       = seconds % 60;

    return `${hours}:${minutes}:${seconds}`
}

/**
 * Update the paraphe with the time calculated
 */
function updateTime()
{
    document.querySelector("p")
            .innerHTML = secondsToHMS(totalSec);        
}

const timeNode = document.querySelectorAll("[data-time]");
let totalSec   = 0;

for(time of timeNode)
{
    let [min, sec] = time.dataset.time.split(":"); 
    totalSec += parseInt(min) * 60 + parseInt(sec);
}

console.log( secondsToHMS(totalSec));

document.querySelector("button")
        .addEventListener("click", updateTime);