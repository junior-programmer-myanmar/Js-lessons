// mousedown, mouseup
// mouseenter, mouseleave, mouseeover, mouseout
//mousemove

// let btn = document.querySelector("#btn");

// btn.addEventListener('dblclick' , function(){
//     console.log(e.type)
// })

let btnOne = document.querySelector("#btn1");
let btnTwo = document.querySelector("#btn2");

// btnOne.onclick = (e) => {
//     console.log(e.target)
// }

// btnTwo.addEventListener('click',(e)=>{
//     console.log(e.target)
// })

// btnOne.onmousedown = (e) => {
//     console.log(e.target.innerText);
// }

// btnTwo.addEventListener('mouseup', (e) => {
//     console.log(e.target.innerText);
// });



 btnOne.onmouseleave = (e) => {
    console.log(e.target.innerText);
}

btnTwo.addEventListener('mouseenter', (e) => {
     console.log(e.target.innerText);
});

btnTwo.addEventListener(para1, para2);