let button1=document.getElementById("set_item");
let button2=document.getElementById("get_item");
let button3=document.getElementById("remove_item");
function setItem(){
    //localStorage.setItem("key",value);
    localStorage.setItem("Name","Maldini");

}
button1.addEventListener("click",setItem);



function getItem(){
    //localStorage.getItem("key");
    let name=localStorage.getItem("Name");
    console.log("Name from localStorage =",name);

    
}
button2.addEventListener("click",getItem);
function removeItem(){
//localStorage.removeItem("key");
    localStorage.removeItem("Name");
}
button3.addEventListener("click",removeItem);