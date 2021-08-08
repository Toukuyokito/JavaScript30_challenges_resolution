function debounce(func, wait = 20, immediate = true) {
    
    var timeout;
    
    return function() {
        var context = this, args = arguments;
        
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
    };
    
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(event)
{

    sliderImage.forEach(image => {
        
        let bottomScreen = window.pageYOffset + window.innerHeight;
        let bottomImage  = image.y + image.width;
        let middleImage  = image.y + image.width / 2;

        const imageMiddleOnScreen = middleImage > window.pageYOffset; 
        const imageBottomOnScreen = bottomImage < bottomScreen;
        
        if(imageMiddleOnScreen && imageBottomOnScreen)
            image.classList.add("active");
        else
           image.classList.remove("active");
        
    });
}

const sliderImage = document.querySelectorAll(".slide-in"); 
window.addEventListener("scroll", debounce(checkSlide));