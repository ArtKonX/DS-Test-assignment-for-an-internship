import getGeolocationCoordinates from "./getGeolocationCoordinates";

/**
 * @async
 * Сохранение координат геолокации в localStorage.
 * Проверяет, существуют ли уже координаты.
 * Если нет, то сохраняет текущие координаты.
 */
export default async function saveGeolocationCoordinates() {
  if (navigator.geolocation) {
    try {
      const coordinates = await getGeolocationCoordinates();

      // Проверка наличия координат в localStorage
      if (!localStorage.getItem("coordinates")) {
        localStorage.setItem("coordinates", JSON.stringify(coordinates));
      }
    } catch (error) {
      console.error("Ошибка получения координат:", error);
    }
  } else {
    console.warn("Геолокация не поддерживается данным браузером.");
  }
}
