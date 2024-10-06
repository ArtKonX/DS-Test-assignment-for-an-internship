import "./dateDisplay.css";
import currentDate from "../../../utils/date-and-time/currentDate";

/**
 * Класс для работы с датой
 */
export default class DateDisplay {
  constructor() {
    // Получаем ссылку на элемент даты в DOM
    this.dateElement = document.querySelector(".date-block__date");
  }

  /**
   * Вызов метода updateDate каждую секунду
   */
  renderDate() {
    // Обновление даты каждую секунду
    setInterval(this.updateDate.bind(this), 1000);
  }

  /**
   * Обновляет текст элемента
   */
  updateDate() {
    this.dateElement.textContent = currentDate();
  }
}
