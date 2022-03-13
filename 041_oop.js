// function Person() {
//     this.name = "Kaung Kaung";
//     this.age = 9;
// };

// let p1 = new Person();
// let p2 = new Person();

// console.log(p1);
// console.log(p2);



// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("Mg Mg",20);
// let p2 = new Person("Aung Aung",30);

// console.log(p1);
// console.log(p2);



// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.getAge = () =>{
//         return this.age
//     }
// }



//  let p1 = new Person("Mg Mg",20);
// let p2 = new Person("Aung Aung",30);


// console.log(p1.name);
// console.log(p2.getAge())



function Person(name,age){
    this.name = name;
    this.age = age;
    this.getAge = () => {
        return this.age
    }
}


let p1 = new Person("Mg Mg",10);
let p2 = new Person("Aung Aung",20);


console.log(p1.name);
console.log(p2.getAge());