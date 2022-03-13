let addDataToDb = (obj) => {
    let data = JSON.stringify(obj);
    localStorage.setItem('localdb' , data)
}

let getDataFromDb = () => {
    let str = localStorage.getItem('localdb')
    let obj = JSON.parse(str);
}

let cleanDb = () => {
    localStorage.removeItem('localdb')
}


let btnDelete = document.querySelector("#btn")

btnDelete.addEventListener9('click' , cleanDb)

from.addEventListener('submit' , (e) => {
    e.preventDefault();
    let name = inputName.value;
    let age = inputAge.value;
    let user = {
        "name": name,
        "age": age,
    }

    addDataToDba(user)
})