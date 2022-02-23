

// for(let h = 0; h < 11 ; h++){
//   let node = list.childNodes[h];
//   console.log(node);
// // }

// let list = document.querySelector(".lis");

// for(let j = 0 ; j < 10; j++) {
//     let node = list.childNodes[j];
//     if (node.nodeType == 1){
//         console.log(node.childNodes[0].textContent)
//     }
// }

// 1 - Element
// 2 - Attribute
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - doctype

// let list = document.querySelector(".lis");
// console.log(list.childNodes[0].nextSibling.nextSibling.previousSibling.previousSibling)


// for (let i = 0; i < 11 ; i++){
//     let node = list.childNodes[i]
//     if (node.nodeType == 1) {
//         console.log(node.childNodes[0].textContent);
//     }
// }

let list = document.querySelector(".lis");
// console.log(list.firstElementChild.childNodes[0].textContent);
//console.log(list.firstElementChild.nextSibling.nextSibling.childNodes[0].textContent)
console.log(list.children[2].childNodes[0].textContent)