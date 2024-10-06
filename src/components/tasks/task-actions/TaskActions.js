import "./taskActions.css";
import StorageHandler from "../storage-handler/StorageHandler";

/**
 * Класс для работы с действиями с задачи
 */
export default class TaskActions extends StorageHandler {
  constructor(element) {
    super();

    // Если элемент передан как строка, преобразуем его в DOM-элемент
    if (typeof element === "string") {
      element = document.querySelector(element);
    }

    this._element = element;

    this.delTask = this.delTask.bind(this);
    this.addFlagCheckbox = this.addFlagCheckbox.bind(this);

    this.init();
  }

  // Добавление обработчиков событий
  init() {
    this._element.addEventListener("click", (e) => {
      const { target } = e;

      if (target.tagName === "BUTTON") {
        this.delTask(e);
      }

      if (target.tagName === "INPUT") {
        this.addFlagCheckbox(e);
      }
    });
  }

  /**
   * Добавление и обновления состояния чекбокса в localStorage и у элемента
   * @param {Event} e - Событие, инициированное действием пользователя
   */
  addFlagCheckbox(e) {
    const { target } = e;

    const taskCheckbox = target
      .closest(".task-elem")
      ?.querySelector(".task-checkbox");
    // Получение списка задач
    let arrTasks = this.getTasksFromStorage();

    if (taskCheckbox) {
      // Находим первый индекс подходящий по id
      const indexTask = this.findIndxTask(arrTasks, taskCheckbox.id);

      // Если индекс найде, то изменяем состояние чекбокса и отправляем всё в localStorage
      if (indexTask !== -1) {
        arrTasks[indexTask].isChecked = taskCheckbox.checked;
        this.updateTasksInStorage(arrTasks);
      }
    }
  }

  /**
   * Удаление задачи из localStorage и элемента этой задачи
   * @param {Event} e - Событие, инициированное действием пользователя
   */
  delTask(e) {
    const { target } = e;

    const taskElem = target.closest(".task-elem");
    const taskCheckbox = target
      .closest(".task-elem")
      ?.querySelector(".task-checkbox");
    // Получение списка задач
    let arrTasks = this.getTasksFromStorage();

    if (taskCheckbox) {
      // Находим первый индекс подходящий по id
      const indexTask = this.findIndxTask(arrTasks, taskCheckbox.id);

      // Если индекс найден, то удаляем по индексу эту задачу из массива arrTasks
      // и отправляем все в localStorage
      if (indexTask !== -1) {
        arrTasks.splice(indexTask, 1);
        this.updateTasksInStorage(arrTasks);
        // Удаляем элемент с задачей из DOM
        taskElem.remove();
      }
    }
  }

  /**
   * Находим первый индекс подходящий по id
   * @param {Array} tasks - Список задач.
   * @param {number} id - id задачи.
   * @returns {number}
   */
  findIndxTask(tasks, id) {
    return tasks.findIndex((existingTask) => existingTask.id === id);
  }
}
