import currentTime from "../../utils/date-and-time/currentTime";
import "./dynamicWallpapers.css";

import image1 from "../../img/backgrounds/01.jpg";
import image2 from "../../img/backgrounds/02.jpg";
import image3 from "../../img/backgrounds/03.jpg";
import image4 from "../../img/backgrounds/04.jpg";

// Создаём объект со всеми импортами
const images = {
  image1: image1,
  image2: image2,
  image3: image3,
  image4: image4,
};

/**
 * Класс для работы с динамической сменой заставки
 */
export default class DynamicWallpapers {
  constructor() {
    // Получаем ссылку на элемент в DOM
    this.body = document.body;

    this.init();
  }

  /**
   * Инициализация динамической смены заставок.
   */
  init() {
    setInterval(() => {
      this.changeWallpapers();
    }, 1000);
  }

  /**
   * Смена заставки в зависимости от текущего времени
   */
  changeWallpapers() {
    // Получаем из функции currentTime время в формате hh:mm
    const time = currentTime(2);

    if (time >= "00:00" && time < "06:00") {
      this.body.style.backgroundImage = `url(${images.image1})`;
    } else if (time >= "06:00" && time < "12:00") {
      this.body.style.backgroundImage = `url(${images.image2})`;
    } else if (time >= "12:00" && time < "18:00") {
      this.body.style.backgroundImage = `url(${images.image3})`;
    } else if (time >= "18:00" && time <= "23:59") {
      this.body.style.backgroundImage = `url(${images.image4})`;
    }
  }
}
