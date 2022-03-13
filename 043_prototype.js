// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.getAge = function () {
//     return this.age;
// }


// Person.prototype.getName = function () {
//     return this.name;
// } 

// Person.prototype.getUserData = function (){
//     return this.name + ":" + this.age;
// }


// let person = new Person("Mg Mg" , 10);
// // console.log(person.getAge())
// console.log(person.getUserData())


function Person(name,age){
    this.name = name;
    this.age = age;
}



Person.prototype.getAge = function() {
    return this.getAge
}

Person.prototype.getName = function(){
    return this.name
}

Person.prototype.getUserData = function(){
    return this.name + ":" + this.getAge
}