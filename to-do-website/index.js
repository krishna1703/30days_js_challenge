let inputText = document.getElementById("input-text");

let addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", addtask);

function addtask() {
  let inputText = document.getElementById("input-text").value;
  console.log(inputText);


  let todoUl = document.getElementById("task-list");
  console.log(todoUl);

//   list create 
  let listoftodos = document.createElement("li");

  let todolist = listoftodos.textContent = inputText;

  todoUl.append(todolist);

  document.getElementById("input-text").value = " ";


//  create btn 

let tododiv = document.getElementById("new-task-list");
console.log(tododiv);
let editbtn = document.createElement("button")

 editbtn.textContent = "edit"; 
 tododiv.append(editbtn)
let deletebtn = document.createElement("button")
 deletebtn.textContent = "delete"
 tododiv.append(deletebtn);
 deletebtn.onclick = function(){
    tododiv.removeChild()
 }


}
