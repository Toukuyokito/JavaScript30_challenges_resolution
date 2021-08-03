/*When more experiment I will try to make a custom element*/
class Canvas2D {

    constructor(id, width, height, color, lineJoin, lineCap, pencilWidth)
    {
        this.canvas        = document.getElementById(id);
        this.canvas.width  = width;
        this.canvas.height = height; 

        this.ctx             = this.canvas.getContext("2d");
        
        this.ctx.strokeStyle = color;
        this.ctx.lineJoin    = lineJoin;
        this.ctx.lineCap     = lineCap;
        this.ctx.lineWidth   = pencilWidth

        this.draw = this.draw.bind(this)
        this.canvas.addEventListener("mousemove", this.draw);

        this.lastX = 0;
        this.lastY = 0;

    }
    
    draw(e)
    {
        // 1 = main button pressed, usually left button        
        if (e.buttons === 1)
        {

            this.ctx.beginPath();
            this.ctx.moveTo(this.lastX, 
                            this.lastY);

            this.ctx.lineTo(e.clientX, e.clientY);
            
        
            this.ctx.stroke();
            this.ctx.closePath();

            this.lastX = e.clientX;
            this.lastY = e.clientY;

        }
        else
        {
            [this.lastX, this.lastY] = [e.clientX, e.clientY];
            this.hue = 0;
        }
    }

}

const draw = new Canvas2D("draw", 
                          window.innerWidth, 
                          window.innerHeight,
                          "#00", 
                          "round",
                          "round",
                          20);
