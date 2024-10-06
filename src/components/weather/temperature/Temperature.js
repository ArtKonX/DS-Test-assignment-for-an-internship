import getInfoWeather from "../../../utils/city-and-weather/getInfoWeather";

import "./temperature.css";

/**
 * Класс для работы с температурой.
 */
export default class Temperature {
  /**
   * @async
   * Получение температуры из функции getInfoWeather.
   * @returns {Promise<number|null>} Температура или null в случае ошибки.
   */
  async getTemperature() {
    try {
      const temperature = await getInfoWeather("temperature");

      // Проверяем, что температура существует перед возвратом
      return Math.ceil(temperature) || null;
    } catch (err) {
      console.error("Ошибка при получении температуры:", err);
    }
    return null; // Возвращаем null, если что-то пошло не так
  }
}
