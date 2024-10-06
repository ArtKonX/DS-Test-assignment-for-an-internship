/**
 * Класс для работы с локальным хранилищем, а именно для получения и обновления задач.
 * Этот класс нужен для дальнейшего наследования
 */
export default class StorageHandler {
  /**
   * Получение задач из localStorage.
   * @returns {Array}
   */
  getTasksFromStorage() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  /**
   * Обновление задач в localStorage.
   * @param {Array} tasks - Список задач.
   */
  updateTasksInStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
