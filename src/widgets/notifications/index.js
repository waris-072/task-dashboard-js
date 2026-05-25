import { on } from "../../core/events/eventBus.js";
import { showNotification } from "./ui.js";

export function initNotifications() {
  on("todo:added", (todo) => {
    showNotification(`Todo Added: ${todo.text}`);
  });

  on("todo:deleted", () => {
    showNotification("Todo Deleted");
  });

  on("todo:toggled", (todo) => {
    const status = todo.completed ? "completed" : "marked as pending";
    showNotification(`Todo ${status}`);
  });

  on("todo:editing", (todo) => {
    showNotification(`Start Editing Todo: ${todo.text}`);
  });
  on("todo:updated", (todo) => {
    showNotification(`Todo Updated to: ${todo.newText}`);
  });

  on("weather:error", (message) => {
    showNotification(message);
  });
}