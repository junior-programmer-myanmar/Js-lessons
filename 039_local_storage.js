
let addDataToDb = (obj) => {
    let data = JSON.stringify(obj);
    localStorage.setItem('localdb',data);
}

let getDataFromDb =  () =>{
    let str = localStorage.getItem('localdb')
    let obj = JSON.parse(str);
}

let cleanDb = () => {

    localStorage.removeItem('localdb')
}


let btnDelete = document.querySelector("#btnDelete");

btnDelete.addEventListener('click',cleanDb);




let form = document.querySelector("form");
let inputName = document.querySelector("#name");
let inputAge = document.querySelector("#age");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    let user = {
        "name": name,
        "age": age,
    };

    addDataToDb(user);

    //console.log(name + ":" + age)
});