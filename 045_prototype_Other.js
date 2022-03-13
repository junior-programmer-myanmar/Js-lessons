const carproto = {
    getSpeed: function (){
        return this.speed;
    },
    getName: function() {
        return this.name
    }

}

let car = Object.create(carproto);
car.name = "Toyota";
car.speed = 130;

let bar = Object.create(carproto, {
    name: {value: "Toyota"},
    speed: {value : 130}
});

console.log(bar)