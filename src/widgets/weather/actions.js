import { setState } from "../../core/store/store.js";
import { emit } from "../../core/events/eventBus.js";

export async function loadWeather(city) {

  setState({
    weatherLoading: true,
    weatherError: null
  });

  try {

    // STEP 1: GET COORDINATES
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      emit("weather:error", "City not found ❌");
      setState({
        weatherLoading: false,
        weatherError: "City not found ❌"
      });
      return;
    }

    const { latitude, longitude, name } = geoData.results[0];

    // STEP 2: GET WEATHER
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );

    const weatherData = await weatherRes.json();

    setState({
      weather: {
        city: name,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed
      },
      weatherLoading: false,
      weatherError: null
    });

  } catch (err) {
    emit("weather:error", err.message);
    setState({
        weatherLoading: false,
        weatherError: err.message
    });
  }
}