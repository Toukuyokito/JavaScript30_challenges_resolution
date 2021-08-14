/**
 * 
 * @return {Promise<boolean>}true is stream is set else false
 */
async function setStreamUp()
{   
    try {
        var localStream = await navigator.mediaDevices.getUserMedia({video:true, audio:false});        
    } 
    catch (error) {
        console.error("Error when acces to camera : ", error.name);
        return  new Promise( (success, failure) => failure(false));    
    }

    video.srcObject = localStream;
    video.play();

    return  new Promise( (success, failure) => success(true));      

}

/**
 * 
 * @param   {Array<number>} data rgb value
 * @returns {Array<number>} filtered value
 */
function filter(pixels)
{
    const test = maxRed.value  >= minRed.value   && 
                maxGreen.value >= minGreen.value &&
                maxBlue.value  >= minBlue.value;

    if (!test) return pixels;
    for (let i=0; i < pixels.data.length; i += 4)
    {
        //R        
        if(pixels.data[i] > maxRed.value) pixels.data[i] = maxRed.value;
        if(pixels.data[i] < minRed.value) pixels.data[i] = minRed.value;
        
        //G
        if(pixels.data[i + 1] > maxGreen.value) pixels.data[i + 1] = maxGreen.value;
        if(pixels.data[i + 1] < minGreen.value) pixels.data[i + 1] = minGreen.value;
                
        //B
        if(pixels.data[i+ 2] > maxBlue.value) pixels.data[i + 2] = maxBlue.value;
        if(pixels.data[i+ 2] < minBlue.value) pixels.data[i + 2] = minBlue.value;

    }

    return pixels;
}

function drawCanvas()
{
    canvas.width  = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageValueRGB = ctx.getImageData(0,0, canvas.width, canvas.height);
    ctx.putImageData(filter(imageValueRGB),0 ,0)
}   

function takePhoto()
{
    snap.currentTime = 0;
    snap.play();
    
    const dataURI = canvas.toDataURL('image/png')
    const link    = document.createElement("a");
    
    const date     = new Date()
    const uniqueId = `${date.getFullYear()}_${date.getMonth()}_${date.getUTCDay()}_${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.png`;

    link.setAttribute("download", 'image' + uniqueId);
    link.href      = dataURI;
    link.innerHTML = `<img src="${dataURI}" alt="">`;
    strip.insertBefore(link, strip.firstChild);

}


const video           = document.querySelector('.player');
const canvas          = document.querySelector('.photo');
const ctx             = canvas.getContext('2d');
const strip           = document.querySelector('.strip');
const snap            = document.querySelector('.snap');
const buttonTakePhoto = document.querySelector(".take-photo");
                                
const maxRed = document.querySelector("[name=rmax]");
const minRed = document.querySelector("[name=rmin]");

const maxGreen = document.querySelector("[name=gmax]");
const minGreen = document.querySelector("[name=gmin]");

const maxBlue = document.querySelector("[name=bmax]");
const minBlue = document.querySelector("[name=bmin]");

buttonTakePhoto.addEventListener("click", takePhoto);
buttonTakePhoto.disabled = true;
setStreamUp().then(streamIsUp => {
    if (streamIsUp) {
        buttonTakePhoto.disabled = false;
        setInterval(drawCanvas, 300);
    } 
    
});


