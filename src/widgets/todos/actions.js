import { getState, setState } from "../../core/store/store.js";
import { emit } from "../../core/events/eventBus.js";

export function addTodo(text) {
  const { todos } = getState();
  const newTodo = { id: Date.now(), text, completed: false};

  setState({
    todos: [...todos, newTodo]
  });

  emit("todo:added", newTodo);
}

export function updateTodo(id, newText) {
    const { todos } = getState();
    const updatedTodos = todos.map(todo => todo.id === id
        ? { ...todo, text: newText }
        : todo
    );
    
     setState({ todos: updatedTodos });
     emit("todo:updated", { id, text: newText });
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