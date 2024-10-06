import "./weatherWidget.css";

/**
 * Класс для работы с блоком погоды.
 */
export default class WeatherWidget {
  constructor(city, temperature, weather) {
    // Конструктор принимает объекты для города, температуры и погоды.
    if (
      city instanceof Object &&
      temperature instanceof Object &&
      weather instanceof Object
    ) {
      this.city = city;
      this.temperature = temperature;
      this.weather = weather;
    }

    // Получаем ссылки на элементы в DOM
    this.cityElem = document.querySelector(".city-info__data");
    this.temperatureElem = document.querySelector(".temperature-info__data");
    this.weatherElem = document.querySelector(".current-weather-info__data");
  }

  /**
   * @async
   * Отображает текст данных для DOM элементов погоды
   */
  async renderWeatherWidget() {
    try {
      // Получаем и отображаем данные о городе, температуре и текущей погоде
      this.cityElem.textContent = await this.city.getCity();
      this.temperatureElem.textContent =
        await this.temperature.getTemperature();
      this.weatherElem.textContent = await this.weather.getCurrentWeather();
    } catch (err) {
      console.error("Ошибка при отрисовке виджета погоды:", err);
      this.cityElem.textContent = "Нет данных";
      this.temperatureElem.textContent = "Нет данных";
      this.weatherElem.textContent = "Нет данных";
    }
  }
}
