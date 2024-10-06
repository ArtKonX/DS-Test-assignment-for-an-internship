import axios from "axios";

/**
 * Получение текущего города на основе координат из localStorage.
 *
 * @async
 * @returns {Promise<number | null>} - Код погоды или температура или null, если координаты отсутствуют.
 */
export default async function getInfoWeather(weather) {
  try {
    const coordinates = JSON.parse(localStorage.getItem("coordinates"));

    // Если координаты отсутствуют, возвращаем null
    if (!coordinates) return null;

    const response = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m&current=weather_code`,
    );

    if (weather === "weather") {
      return response.data.current.weather_code;
    }

    if (weather === "temperature") {
      return response.data.current.temperature_2m;
    }
  } catch (error) {
    console.log("Ошибка при получении кода погоды или температуры:", error);
  }
}
