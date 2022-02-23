// // let scripts = document.scripts;
// // let scriptsAry = Array.from(scripts);
// // scriptsAry.forEach((script) => {
// //         console.log(script.src)
// // });

// let btn = document.querySelector("#btn");

// btn.onclick = function(){
//     alert(123);
// }

// let list = document.querySelector("ul li:first-child > a")

// list.style.color = "red"

// let scripts = document.scripts;
// let scriptsAry = Array.from(scripts);
// scriptsAry.forEach((scripts) => console.log(script.src))

// let btn = document.querySelector("#btn");

// btn.onclick = function(){
//     alert(123);
// }

// let list = document.querySelector("ul li:first-child > a")
// list.style.color = "red"


// let list1 = document.querySelector("ul li:nth-of-type(2) > a");
// list1.style.color = "blue";

// let list3 = document.querySelector("ul li:nth-child(3) > a")
// list3.style.color = "pink"

// let list2 = document.querySelector("ul li:nth-last-of-type(5) > a")
// list2.style.color = "yellow"

let list4 = document.querySelectorAll("ul li");
for(let j = 0; j < list4.length; j++) {
    let aTag = list4[j].querySelector("a")
    aTag.style.color = "red"
}