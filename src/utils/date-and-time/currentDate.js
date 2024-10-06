/**
 * Получение текущей даты в отформатированном виде
 * @returns {string} - Дата в формате "День Месяц, День недели"
 */
export default function currentDate() {
  const date = new Date();

  const options = {
    day: "2-digit",
    month: "long",
    weekday: "long",
  };

  // Форматирование даты с использованием локали
  const formattedDate = date.toLocaleDateString([], options);

  // Замена запятой и разделение строки на части
  const formattedDateParts = formattedDate.replace(",", "").split(" ");

  // Форматированный результат
  return `${formattedDateParts[1]} ${formattedDateParts[2]}, ${formattedDateParts[0]}`;
}
