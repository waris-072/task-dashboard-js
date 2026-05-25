import { getState } from "../../core/store/store.js";
import { deleteTodo, toggleTodo, startEdit} from "./actions.js";

export function renderTodos() {
  const list = document.getElementById("todoList");

  list.innerHTML = "";

  const { todos, filter } = getState();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      toggleTodo(todo.id);
    });

    const span = document.createElement("span");
    span.innerText = todo.text;
    if(todo.completed) {
      span.style.textDecoration = "line-through";
    }

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.addEventListener("click", () =>{
      startEdit(todo);
    });

    const dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    dltBtn.addEventListener("click", () => {
      deleteTodo(todo.id);
    });

    span.textContent = todo.text;
    li.append(checkbox, span, editBtn, dltBtn);

    list.appendChild(li);
  });
}