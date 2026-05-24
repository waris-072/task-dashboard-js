import { subscribe, getState } from "../../core/store/store.js";
import { renderAnalytics } from "./ui.js";

export function initAnalytics() {
  subscribe(() => {
    const { todos } = getState();

    const stats = {
      total: todos.length,
      completed: todos.filter(t => t.completed).length,
      pending: todos.filter(t => !t.completed).length
    };

    renderAnalytics(stats);
  });

  // initial render
  const { todos } = getState();

  renderAnalytics({
    total: todos.length,
    completed: 0,
    pending: todos.length
  });
}