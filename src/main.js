import { initTodos } from "./widgets/todos/index.js";
import { initNotifications } from "./widgets/notifications/index.js";
import { initAnalytics } from "./widgets/analytics/index.js";
import { setFilter } from "./widgets/todos/actions.js";
import { subscribe } from "./core/store/store.js";
import { initWeather } from "./widgets/weather/index.js";
import { initQuote } from "./widgets/quote/index.js";

initTodos();
initNotifications();
initAnalytics();
initWeather();
initQuote();