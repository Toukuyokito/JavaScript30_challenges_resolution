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


function toggleClassesStickyNav() {
    const y    = nav.getBoundingClientRect().y;

    if(!y)
    {
        nav.classList.add("nav-moove")
    }
    else
    {
       nav.classList.remove("nav-moove")
    }
}

const nav = document.querySelector("#main");

window.addEventListener("scroll", debounce(toggleClassesStickyNav, 15))
