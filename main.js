// array which stores every todos
var elements = [];
// function to add todos to local storage
window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements")) != null){
        // converts back to array and store it in todos array
        elements =JSON.parse(localStorage.getItem("todo-elements"));
        console.log("elements:" + elements);
        display();
    }
};
// add element 
function addElement(){
    // select input value
    if(document.querySelector(".inptext").value.trim() != ""){
         // then add it to todos array
        elements.push(document.querySelector(".inptext").value.trim());
        if(JSON.parse(localStorage.getItem("todo-elements")) != null){
            // conver the array to string then store it.
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }else{
            localStorage.setItem("todo-elements", JSON.stringify(elements));
        }
        console.log(localStorage.getItem("todo-elements"));
        display()
    }
}
// display items list
function display(){
    document.querySelector(".list").innerHTML = "";
    for(var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML += "<center><div class='element'>"
    +elements[i]+"<button onclick='del("+i+")' class='delete'>DELETE</button></div></center>";
}
// delete items
function del(index){
    elements.splice(index, 1);
    if(JSON.parse(localStorage.getItem("todo-elements")) != null){
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }else{
        localStorage.setItem("todo-elements", JSON.stringify(elements));
    }
    console.log(localStorage.getItem("todo-elements"));
    display();
}
