// let form = document.querySelector("form");
// let link = document.querySelector("#toG");
// let input = document.querySelector("#inp");


// // input.addEventListener("keydown" , (e) =>{
// //     console.log(input.value)
// // });


// input.addEventListener("keyup",(e) => {
//     console.log(input.value)
// });


let form = document.querySelector("form");
let link = document.querySelector("#toG");
let input = document.querySelector("#inp");

 
 input.addEventListener("keydown" , (e) =>{
     console.log(input.value)
 })

 input.addEventListener("keyup", function(e){
     console.log(input.value)
 });







// link.addEventListener('click' , (e) => {
//         e.preventDefault();
//         console.log("Hi Google")
// });

form.addEventListener('submit',(e) => {
    e.preventDefault();
    // console.log(e.type)
    console.log(input.value)
});