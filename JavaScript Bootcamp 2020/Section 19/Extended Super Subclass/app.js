class Pet {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9){
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow(){
        return 'Meow!';
    }
    eat(){
        return `${this.name} scarfs her food`;
    }
}

class Dog extends Pet{
    bark(){
        return 'Bark!';
    }
}

const cat = new Cat('Jasmine', 3);
cat.eat();
cat.meow();

const dog = new Dog('Max', 4);
dog.eat();
dog.bark();


//super will call the parent constructor for the passed in properties!