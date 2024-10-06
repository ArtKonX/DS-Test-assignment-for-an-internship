/**
 * Получает текущее время в заданном формате.
 * @param {number} digit - Определяет формат времени:
 * 2 для отображения только часов и минут,
 * любое другое значение для отображения часов, минут и секунд.
 * @returns {string} Текущее время в указанном формате.
 */
export default function currentTime(digit) {
  const date = new Date();

  // Проверка на корректность параметра digit
  if (digit !== 2) {
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
