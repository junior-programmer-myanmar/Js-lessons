
let addDataToDb = (userObj) => {
    let userAry = getFromDb();
    if(userAry == null){
        userAry = [];

        userAry.push(userObj)
        saveToDB(userAry);
    } else {
         let ind  = userAry.findIndex[user => user.name == userObj.name];
         if(ind == -1){
            userAry.push(userObj)
            saveToDB(userAry)
         }else{
             alert("User alerady exist with that name")
             
         }
    }
    
    // let userObj = JSON.stringify(obj);
    //sessionStorage.setItem('localdb',data);
}

let saveToDB =  (aryObj) =>{
  
    let saveData = JSON.stringify(aryObj);
    sessionStorage.setItem('userdb', saveData)
}

let getFromDb =  () =>{
    let str = sessionStorage.getItem('userdb')
    let aryObj = JSON.parse(str);
    return aryObj ;
}

let cleanDb = () => {

    sessionStorage.removeItem('userdb')
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