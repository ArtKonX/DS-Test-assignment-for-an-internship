import "./tasksRender.css";
import StorageHandler from "../storage-handler/StorageHandler";

/**
 * Класс для работы с отображение задач
 */
export default class TasksRender extends StorageHandler {
  constructor() {
    super();

    // Находим элемент списка задач в DOM
    this.tasksList = document.querySelector(".tasks-list");
  }

  /**
   * Генерирует HTML разметку для одной задачи.
   * @param {Object} task - Объект задачи.
   * @returns {string} - HTML строка для задачи.
   */
  getTaskElem(task) {
    return `
            <li class='task-elem'>
                <input id="${task.id}" type="checkbox" class="task-checkbox" ${task.isChecked ? "checked" : ""}>
                <label for="${task.id}" class='task'>${task.task}</label>
                <button class='btn-del'>Удалить</button>
            </li>
        `;
  }

  /**
   * Отображает все задачи из localStorage в списке.
   */
  renderTasks() {
    const tasks = this.getTasksFromStorage();

    tasks.forEach((task) => {
      this.tasksList.insertAdjacentHTML("beforeend", this.getTaskElem(task));
    });
  }

  /**
   * Добавляет новую задачу в список.
   * @param {Object} task - Объект задачи для добавления.
   */
  renderTask(task) {
    this.tasksList.insertAdjacentHTML("beforeend", this.getTaskElem(task));
  }
}
