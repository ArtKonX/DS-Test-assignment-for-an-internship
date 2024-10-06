import getInfoWeather from "../../../utils/city-and-weather/getInfoWeather";

import data from "../../../data/codes-weather.json";

import "./currentWeather.css";

/**
 * Класс для отображения текущей погоды (дождь/солнечная/снег/пасмурно).
 */
export default class CurrentWeather {
  constructor() {
    this.currentWeather = "";
  }

  /**
   * Получение текущей погоды по коду из функции getInfoWeather.
   * @async
   * @returns {Promise<string|null>} Текущая погода или null в случае ошибки.
   */
  async getCurrentWeather() {
    try {
      const weather = await getInfoWeather("weather");

      // Сравниваем полученный код из getInfoWeather с кодом из codes-weather.json
      data.forEach((currWeather) => {
        const entriesWeather = Object.entries(currWeather);
        for (const [key, value] of entriesWeather) {
          if (value.includes(weather)) {
            this.currentWeather = key;
          }
        }
      });

      // Проверяем, что текущая погода существует перед возвратом
      return this.currentWeather || null;
    } catch (err) {
      console.error("Ошибка при получении текущей температуры:", err);
    }
    return null; // Возвращаем null, если что-то пошло не так
  }
}
