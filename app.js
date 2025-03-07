//*  Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//* Event Listeners
todoButton.addEventListener("click", addTodo);

//* Functions
function addTodo(event) {
  // Preventing form from submitting
  event.preventDefault();

  // Create TODO Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = "Hello Man";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // Append to List
  todoList.appendChild(todoDiv);
}
