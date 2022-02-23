// concatination += string append, escaping

let str = "Aung Kaung Myint Mo "
str += "This is My Name"
console.log(str)



let str1 = "Aung Kaung"
console.log(str1)
console.log(str1.length)


let str2 = "Myint Mo"
let aa = str1.concat('-----' , str2)
console.log(aa)

let str3 = "aung kaung myint mo"
console.log(str3.toLocaleLowerCase())

 
let str4 = "Myint Mo";

console.log(str4.indexOf('M'))
console.log(str4.lastIndexOf('M'))
console.log(str4.charAt(0))
console.log(str4[str4.length - 1]);
console.log(str4.substr(-2,2))
console.log(str4.slice(-3))
console.log(str4.slice(0,5))


let str5 = "aung kaung myint mo"

let ary = str5.split(" ")
console.log(ary)




let str6 = "aung kaung myint mo"

let ary1 = str5.replace("aung" , "kaung")
console.log(ary1)



let str57 =  "aung kaung myint mo";

let ary0 = str5.includes("LOr")
console.log(ary0)
