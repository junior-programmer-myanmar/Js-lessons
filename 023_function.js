function doIt() {
    console.log("I am function")
}

doIt();

function doloop() {
    for(let j =0; j < 3; j++){
        console.log("I am function 3")
    }
}

doloop();

// function doIt1() {
//     return 20;
// }

// console.log(doIt1())


function doIt2() {
  return 20;
}

let total = doIt2() + 20;
console.log(total)

function doIt10(name,age = 20) {
    console.log("Name is "  + name + " Age is " + age)
}

doIt10("Mg Mg" , 30)