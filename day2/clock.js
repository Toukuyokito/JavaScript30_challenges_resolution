class Clock 
{
    constructor()
    {
        this.__secondHand = document.querySelectorAll(".second-hand");
        this.__minHand    = document.querySelectorAll(".min-hand");
        this.__hourHand   = document.querySelectorAll(".hour-hand");

        if(!this.__secondHand.length) throw "Class second-hand not found in HTML";
        if(!this.__minHand.length) throw "Class min-hand not found in HTML"; 
        if(!this.__hourHand.length) throw "Class hour-hand not found in HTML"; 

        const currentDate = new Date();
        
        this.__setSecond(currentDate.getSeconds());
        this.__setMin(currentDate.getMinutes());
        this.__setHour(currentDate.getHours())
        
        setInterval(this.setDate.bind(this), 1000)

    } 

    /*
    Converte seconde, minute to degree
    */
    __toDegree(date)
    {
        return date * 360 / 60;
    }

    __hourTodegree(date)
    {
        return date * 360 / 24;
    }

    __setSecond(seconde) 
    {
        for(let hand of this.__secondHand)
        {
            hand.style.transform = `rotate(${this.__toDegree(seconde) + 90}deg)`;
        }
        
    }

    __setMin(min)
    {
        for(let hand of this.__minHand)
        {
            hand.style.transform = `rotate(${this.__toDegree(min) + 90}deg)`;
        }
    }

    __setHour(hour)
    {
        for(let hand of this.__hourHand)
        {
            hand.style.transform = `rotate(${this.__toDegree(hour) + 90}deg)`;
        }
    }

    setDate()
    {
        const currentDate = new Date();
        
        this.__setSecond(currentDate.getSeconds());

        if(!currentDate.getSeconds()) this.__setMin(currentDate.getMinutes());
        if(!currentDate.getMinutes()) this.__setHour(currentDate.getHours());
    }

}

const horloge = new Clock()