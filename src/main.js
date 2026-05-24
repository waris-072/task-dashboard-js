import { initTodos } from "./widgets/todos/index.js";
import { initNotifications } from "./widgets/notifications/index.js";
import { initAnalytics } from "./widgets/analytics/index.js";
import { setFilter } from "./widgets/todos/actions.js";

initTodos();
initNotifications();
initAnalytics();

const filterSelect = document.getElementById("filterSelect");
filterSelect.addEventListener("change", (e) => {
  setFilter(e.target.value);
});

subscribe(() => {
  const { filter } = getState();
  if (filterSelect) {
    filterSelect.value = filter;
  }
});

