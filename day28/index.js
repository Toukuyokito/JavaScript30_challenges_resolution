/**
 * Trunc value for html video speed
 * If speed is less than 0.25 return 0.25
 * @param {Number<float>} value
 */
function truncSpeed(speed)
{   
    const truncSpeed  = Math.trunc(speed * 100) / 100;
    return truncSpeed >= 0.25 ? truncSpeed : 0.25;
}

/**
 * 
 * @param {Number<float>} value between 0.25 and 4.0
 */
function setVideoSpeed(value)
{
    video.playbackRate = value;
}

function moveSpeedBar(event)
{
    if (event.buttons !== 1) return;
    

    /* 1 equal 25%, then 4 equal 100 % */
    const currentYpositionInPourcent = event.layerY * 100.0 / speedContainer.getBoundingClientRect().height;
    const betweenZeroAndHundred      = currentYpositionInPourcent >= 0.0 && currentYpositionInPourcent <= 100.0;

    if (betweenZeroAndHundred) {
        document.documentElement.style.setProperty("--speed-bar-height", `${currentYpositionInPourcent}%`);
        
        const speed        = truncSpeed(currentYpositionInPourcent * 4.0 / 100);
        speedBar.innerHTML = speed;
        setVideoSpeed(speed);
    }
}

const video          = document.querySelector(".wrapper video");
const speedContainer = document.querySelector(".wrapper .speed");
const speedBar       = document.querySelector(".wrapper .speed-bar");

speedContainer.addEventListener("mousemove", moveSpeedBar);