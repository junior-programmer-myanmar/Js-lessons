// Scope var, let, const

let num = 20; // global
var count = 10; // block

console.log(window.num)
console.log(window.count) 

for(var j = 0; j < 10 ; j++){
    console.log(j)
}
console.log("***************")
console.log(j)

function doIt() {
    let   count = 30;
    let   num = 24;
    console.log(count)
    console.log(num)
}

doIt()

const num3 = 60;

num3 = 70;

console.log(num3)

/*

    var => global , redeclare , reassign
    const => global,
    let  => block scope, not redeclare ,  reassign

*/