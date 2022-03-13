
let btn = document.querySelector("#btn");

btn.onclick =  function(){
    alert(12345)
}


btn.ondblclick = () => alert(btn.innerHTML)


btn.addEventListener('click', function(e){
    console.log(e)
})

btn.addEventListener('dblclick', function(e){
    console.log(e)
})