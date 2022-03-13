// class Car {
//         constructor(name,speed){
//             this.name = name;
//             this.speed = speed;
//         }
//         getSpeed(){
//             console.log(this.speed)
//         }
// }

// class Toyota extends Car {
//      constructor(name,speed,price){
//          super(name,speed)
//          this.price = price
//      }
//      getSpeed(){
//          console.log("This is Toyota override   " + this.speed )
//      }
// }


// let ty = new Toyota("Toyota", 180,1800);
// ty.getSpeed();
// console.log(ty.price)

class Animal {
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${thsi.name}:IS running`)
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} is woof woof`)
    }
    eat(){
        console.log(`${this.name} is eating Bone`)
    }
}

class Cat extends Animal{
    mee(){
        console.log(`${this.name} is mee mee`)
    }
}

class Rabbit extends Animal{
    constructor(name,color){
        super(name)
        this.color = color;
    }

    eat(){
        console.log(`${this.name} is eating vegetable`)
    }
}


let dog = new Dog("BO bo")
dog.bark();
dog.eat();

let cat = new Cat("Aung Bo")
cat.mee();

let rabbit = new Rabbit("Yu Yu","red");
rabbit.eat();