
document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTodoForm");
    let todoList = document.getElementById("todoList");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let removeItem = document.createElement("button");
      removeItem.innerText = "x";
  
      let newTodo = document.createElement("li");
      newTodo.innerText = document.getElementById("new").value;
  
      todoList.appendChild(newTodo);
      newTodo.appendChild(removeItem);
  
      todoForm.reset();
    });
  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });



// still needs local storage added!!!