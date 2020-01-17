const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start(){
        //inside of set interval this is defined back at the window, global scope
        //people would instead say const that = this; and then use that.pickPhrase to make it work
        //but arrow function, don't get their own this, so they can be used with no issues
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
    stop(){
        clearInterval(this.timerId);
        console.log("Yay, it's over");
    }
}


//arrow functions suck at defining a method, cuz the this is not defined, so the this references the window
//but arrow functions rock when you want the this of the current scope


