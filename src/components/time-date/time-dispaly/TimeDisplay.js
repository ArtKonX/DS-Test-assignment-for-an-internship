import currentTime from "../../../utils/date-and-time/currentTime";
import "./timeDisplay.css";

/**
 * Класс для работы с временем
 */
export default class TimeDisplay {
  constructor() {
    // Получаем ссылку на элемент времени в DOM
    this.timeElement = document.querySelector(".time-block__time");
  }

  /**
   * Вызов метода updateTime каждую секунду
   */
  renderTime() {
    // Обновление времени каждую секунду
    setInterval(this.updateTime.bind(this), 1000);
  }

  /**
   * Обновляет текст элемента
   */
  updateTime() {
    this.timeElement.textContent = currentTime();
  }
}
