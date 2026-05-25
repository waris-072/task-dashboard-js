import { addTodo, editTodo, setFilter } from "./actions.js";
import { renderTodos } from "./ui.js";
import { subscribe, getState, setState } from "../../core/store/store.js";


export function initTodos() {

  const btn = document.getElementById("addTodoBtn");
  const input = document.getElementById("todoInput");

  const filterSelect = document.getElementById("filterSelect");
  filterSelect.addEventListener("change", (e) => {
    setFilter(e.target.value);
  });

  btn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return;
    const { editingId } = getState();
 
    if (editingId !== null) {
      editTodo(editingId, text);
      setState({
        editingId: null
      });
      btn.textContent = "Add";
    }
    else {
      addTodo(text);
    }

    input.value = "";
  });

  subscribe(() => {
    renderTodos();
  });

  renderTodos();
}