let number10 = [9,8,374,67,45,12,8,98,89,16,18]

number10.sort((x,y) => x-y)
console.log(number10)

let number11 = [9,8,374,67,45,12,8,98,89,16,18];

number11.sort((x,y) => y - x)
console.log(number11)


let number12 = [12,13,15,16,4,5];
let data = number12.find(x => x < 13)
console.log(data)

let number13 = [12,13,15,16,4,5];
let ary = new Array(342,43,23);

let aa = number13.concat(ary);

console.log(aa.sort((x,y) => y-x))