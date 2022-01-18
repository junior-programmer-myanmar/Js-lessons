let users = [
    {
        name:"Mg Mg",
        age: 10,
        school: "ygn"
    },
    {
        name:"Aung Aung",
        age: 20,
        school: "mdy"
    },
    {
        name: "Kaung Kaung",
        age:30,
        school: "siggai"
    },
   
]

let ind = users.findIndex(user => user.age == 40);
// console.log(users[ind]);
console.log(ind)

let date = new Date()
console.log(date)


// users.forEach((user) => console.log(user))

// users.forEach((user) => console.log(user.name))

// users.map((user) =>{
//     console.log(user.age)
// }


// let nums = [1,2,3,4,5]

// let result = nums.map( function(n) {
//     return n + 1
// } )

// console.log(result)
// console.log(nums)

