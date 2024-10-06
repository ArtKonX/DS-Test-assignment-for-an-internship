/**
 * @async
 * Получение геолокационных координат.
 * В случае ошибки возвращает координаты по умолчанию (Краснодар).
 * @returns {Promise<{latitude: number, longitude: number}>} - Долгота и широта текущей позиции.
 */
export default async function getGeolocationCoordinates() {
  return new Promise((resolve) => {
    // Проверяем, поддерживается ли геолокация
    if (!navigator.geolocation) {
      console.error("Геолокация не поддерживается браузером.");
      // Возвращаем координаты по умолчанию
      resolve({ latitude: 45.0448, longitude: 38.943216 });
      return;
    }

    // Запрашиваем текущее положение
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        localStorage.setItem(
          "coordinates",
          JSON.stringify({ latitude, longitude }),
        );
        resolve({ latitude, longitude });
      },
      (error) => {
        console.error("Ошибка при получении положения:", error);
        // Возвращаем координаты по умолчанию
        const defaultCoordinates = { latitude: 45.0448, longitude: 38.943216 };
        localStorage.setItem("coordinates", JSON.stringify(defaultCoordinates));
        resolve(defaultCoordinates);
      },
    );
  });
}
