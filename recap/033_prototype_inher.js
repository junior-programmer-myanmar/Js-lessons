

function Car(name,speed){
    this.name = name;
    this.speed = speed
}

Car.prototype.getPros = function(){
    return `Name: ${this.name} Speed ${this.speed}. `  
}

function Toyota(name,speed,model){
    Car.call(this,name,speed);
    this.model = model
}
Toyota.prototype = Object.create(Car.prototype);

function Suzuki(name,speed){
    Car.call(this,name,speed);
}
Suzuki.prototype = Object.create(Car.prototype);

function Honda(name,speed){
    Car.call(this,name,speed);
}
Honda.prototype = Object.create(Car.prototype)
Honda.prototype.getPros = function(){
    return `This is Hondle ${this.speed}`
}

let toyota = new Toyota("Toyota" , "80" , 2012);
let suzuki = new Suzuki("Suzuki" , "83");
let honda = new Honda("Honda" , "82");


console.log(toyota.getPros());

console.log(suzuki.getPros());

console.log(honda.getPros());