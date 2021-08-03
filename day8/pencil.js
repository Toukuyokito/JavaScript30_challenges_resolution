/*Unused but still here for educational purpose*/
class Pencil {
    lineJoinPossibleValue = ["bevel", "round", "miter"]
    lineCapPossibleValue  = ["butt", "round", "square"]
    
    constructor(color, strokeStyle, lineCap)
    {
        this.color    = color;
        this.lineJoin = strokeStyle;
        this.lineCap  = lineCap;
    }

    setColor(newColor)
    {
        if (!newColor.match("^#([A-F]|[0-9]){6}$")) {
            throw new TypeError("Invalide hexadecimal string");
        }

        this.color = newColor;
    }

    setLineJoin(newLineJoin)
    {
        if (Pencil.lineJoinPossibleValue.some(style => style === newLineJoin)) {
            throw `Invalide line style value.\nPossible value ${Pencil.lineJoinPossibleValue}`;
        }
        
        this.newLineJoin = newLineJoin;
    }

    setlineCap(newLineCap)
    {
        if (Pencil.lineCapPossibleValue.some(style => style === newLineCap)) {
            throw `Invalide line style value.\nPossible value ${Pencil.lineCapPossibleValue}`;
        }
        
        this.lineCap = newLineCap;    
    }
    
}
