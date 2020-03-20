//Below is a constructor function, now we will compare this to JS Classes

/*
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function() {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function() {
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function(a = 1.0) {
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

//when we use the new keyword, it will create a blank js object of said class
//it will set this to the new object,
//then it returns this!

const color1 = new Color(255, 40, 100);
*/

class Color {
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        return `Hello from ${this.name}!`;
    }
    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }
    rgb(){
        return `rgb(${this.innerRGB()})`;
    }
    hex(){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgba(a = 1.0){
        return `rgba(${this.innerRGB()}, ${a})`;
    }
}

const color1 = new Color(255, 67, 89, 'tomato');


