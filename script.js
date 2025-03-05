const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");   
const addToDobtn = document.getElementById("addToDobtn");

addToDobtn.addEventListener("click", () => {

    const newToDoText = newToDoInput.value;

    if(newToDoText!==""){
        const newToDoItem = document.createElement("li");
        newToDoItem.textContent = newToDoText;
        const deleteToDoBtn = document.createElement("button");
        deleteToDoBtn.innerText = "X";

        deleteToDoBtn.classList.add("delete-ToDo-Btn");
        deleteToDoBtn.addEventListener("click", function() {
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteToDoBtn);
        todoList.appendChild(newToDoItem);
        newToDoInput.value = "";
    }

});