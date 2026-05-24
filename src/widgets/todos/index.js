import { addTodo } from "./actions.js";
import { renderTodos } from "./ui.js";
import { subscribe } from "../../core/store/store.js";

export function initTodos() {
  const btn = document.getElementById("addTodoBtn");

  btn.addEventListener("click", () => {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    if (!text) return;
    addTodo(text);
    input.value = "";
  });

  subscribe(() => {
    renderTodos();
  });

  renderTodos();
}