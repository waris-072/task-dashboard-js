import { getState, setState } from "../../core/store/store.js";
import { emit } from "../../core/events/eventBus.js";

export function addTodo(text) {
  const { todos } = getState();
  const newTodo = { id: Date.now(), text, completed: false, editing: false };

  setState({
    todos: [...todos, newTodo]
  });

  emit("todo:added", newTodo);
}

export function deleteTodo(id) {
  const { todos } = getState();
  const updatedTodos = todos.filter(todo => todo.id !== id);

  setState({ todos: updatedTodos });

  emit("todo:deleted", id);
}

export function toggleTodo(id) {
  const { todos } = getState();

  const updated = todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  );

    setState({ todos: updated });
    emit("todo:toggled", { 
        id, completed: updated.find(t => t.id === id)?.completed
    });
}

export function setFilter(filter) {
  setState({ filter });
}

export function startEdit(todo) {
  setState({
    editingId: todo.id
  });

  const input = document.getElementById("todoInput");
  const btn = document.getElementById("addTodoBtn");

  input.value = todo.text;
  btn.textContent = "Update";

  emit("todo:editing", todo);
}

export function editTodo(id, newText) {
  const { todos } = getState();
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        text: newText
      };
    }
    return todo;
  });

  setState({
    todos: updatedTodos
  });

  emit("todo:updated", { id, newText });
}