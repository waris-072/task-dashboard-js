import { getState } from "../../core/store/store.js";

export function renderWeather() {

  const container =
    document.getElementById("weatherResult");

  if (!container) return;

  const { weather, weatherLoading, weatherError } = getState();

  // 1. LOADING STATE
  if (weatherLoading) {
    container.innerHTML = `
      <p>⏳ Loading weather...</p>
    `;
    return;
  }

  // 2. ERROR STATE
  if (weatherError) {
    container.innerHTML = `
      <p style="color:red;"> ${weatherError}</p>
    `;
    return;
  }

  // 3. EMPTY STATE
  if (!weather) {
    container.innerHTML = `
      <p>No weather data</p>
    `;
    return;
  }

  // 4. SUCCESS STATE
  container.innerHTML = `
    <h3>${weather.city}</h3>
    <p>🌡 Temperature: ${weather.temp}°C</p>
    <p>💨 Wind: ${weather.wind} km/h</p>
  `;
}