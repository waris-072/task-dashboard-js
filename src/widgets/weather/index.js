import { loadWeather } from "./actions.js";
import { renderWeather } from "./ui.js";
import { subscribe } from "../../core/store/store.js";
import { getState } from "../../core/store/store.js";

export function initWeather() {
  const input = document.getElementById("cityInput");
  const btn = document.getElementById("searchWeatherBtn");

  // SEARCH EVENT
  btn.addEventListener("click", () => {
    const city = input.value.trim();
    if (!city) return;
    loadWeather(city);
  });

  subscribe(() => {
    const { weatherLoading } = getState();
    btn.disabled = weatherLoading;
  });

  // REACTIVE RENDER
  subscribe(() => {
    renderWeather();
  });

  renderWeather();
}