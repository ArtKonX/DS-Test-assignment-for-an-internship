import axios from "axios";

/**
 * Получение текущего города на основе координат из localStorage.
 *
 * @async
 * @returns {Promise<string | null>} - Название города или null, если координаты отсутствуют.
 */
export default async function getCurrentCity() {
  try {
    const coordinates = JSON.parse(localStorage.getItem("coordinates"));

    // Если координаты отсутствуют, возвращаем null
    if (!coordinates) return null;

    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coordinates.latitude}&lon=${coordinates.longitude}&zoom=18&addressdetails=1`,
    );

    const { city } = response.data.address;

    return city;
  } catch (error) {
    console.error("Ошибка при получении города:", error);
  }
}
