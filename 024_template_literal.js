let person = {
    name: 'Aung Kaung Myint Mo',
    borther: "Bhone Mant",
    sister:  'Yu Yu',
    Parents: ["U Than Htike Aung" , "Daw Yu Ya Aung Mint Thein" ],
    age: 20
}

let data = `
    <h1> My name : ${person.name} </h1>
    <ul>
        <li> Father : ${person.Parents[0]} </li>
        <li> Monther : ${person.Parents[1]} </li>
        <li> Borther : ${person.borther} </li>
        <li> Sister : ${person.sister} </li>
    </ul?>
`
document.querySelector(".para").innerHTML = data