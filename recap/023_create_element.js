let list = document.querySelector(".lis")

// <li> Six </li> start 

// let li = document.createElement("li");
// let textnode = document.createTextNode("Six")
// li.appendChild(li)
// list.appendChild(li)


// <li> Six </li> end



// <li><a href = "#" > Six </a> </li> start

let text = document.createTextNode("Six");
let aTag = document.createElement("a");
aTag.setAttribute("href" , "#");
aTag.appendChild(text);
let li = document.createElement(li);
li.appendChild(aTag);
list.prepend(li)

// <li><a href = "#" > Six </a> </li> start
