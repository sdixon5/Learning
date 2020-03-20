//this is a factory function!!!!!!!!
/*
function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;
        return `rgb(${r}, ${g}, ${b})`;
    }
    color.hex = function() {
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
*/

//this is not the ideal way of doing this!

//doing it the way above causes a unique copy of the function to be created each time makeColor()
//is called. This is wasted resources and not needed

//const firstColor = makeColor(35,255,150);
//const black = makeColor(0,0,0);

//black.hex === firstColor.hex //returns false
//the reason is that functions are reference types but these functions don't point to the same reference
//even though they should, since making new versions of each is a waste

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
const color2 = new Color(0, 238, 123);

document.body.style.backgroundColor = color1.rgba(0.4);

//this is more effecient creating only one function for the rgb and hex functions 
//instead of instances of the functions for each created object

//color1.hex === color2.hex //returns true //AWESOME!

//REMEMBER ----------- Don't Use Arrow Functions they work with the this keyword differently