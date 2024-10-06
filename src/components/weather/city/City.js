import "./city.css";
import getCurrentCity from "../../../utils/city-and-weather/getCurrentCity";

/**
 * Класс для работы с городами.
 */
export default class City {
  /**
   * @async
   * Получение названия города из функции getCurrentCity.
   * @returns {Promise<string|null>} Название города или null в случае ошибки.
   */
  async getCity() {
    try {
      const city = await getCurrentCity();

      // Проверяем, что город существует перед возвратом
      return city || null;
    } catch (err) {
      console.error("Ошибка при получении города:", err);
    }
    return null; // Возвращаем null, если что-то пошло не так
  }
}
