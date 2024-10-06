import "./taskForm.css";
import StorageHandler from "../storage-handler/StorageHandler";

/**
 * Класс для работы с формой задачи
 */
export default class TaskForm extends StorageHandler {
  constructor(tasksRender) {
    super();

    // Конструктор принимает объект для отображения задачи.
    if (tasksRender instanceof Object) {
      this.tasksRender = tasksRender;
    }

    // Получаем ссылки на элементы в DOM
    this.taskFormTag = document.querySelector(".task-form");
    this.errorSpan = document.querySelector(".error-message");

    this.init();
  }

  /**
   * Инициализация обработчиков событий.
   */
  init() {
    this.taskFormTag.addEventListener("submit", (event) => {
      event.preventDefault();
      this.addTask();
    });
  }

  /**
   * Генерация уникального идентификатора для задачи.
   * @returns {string} - id для задачи.
   */
  generateId() {
    return Date.now().toString();
  }

  /**
   * Добавляет задачу в localStorage и отображает ее в HTML
   */
  addTask() {
    const taskInputValue = this.taskFormTag
      .querySelector(".task-input")
      .value.trim();
    if (!taskInputValue) return; // Прерываем, если пустое значение

    let arrTasks = this.getTasksFromStorage();

    // Проверяем, существует ли уже задача с таким же названием
    if (this.taskExists(arrTasks, taskInputValue)) {
      this.displayError("Такая задача уже есть");
      return;
    }

    const newTask = {
      id: this.generateId(),
      task: taskInputValue,
      isChecked: false,
    };

    arrTasks.push(newTask);
    this.tasksRender.renderTask(newTask);
    this.updateTasksInStorage(arrTasks);
    this.taskFormTag.reset();
  }

  /**
   * Проверка на существование задачи.
   * @param {Array} tasks - Список задач.
   * @param {string} task - Название задачи.
   * @returns {boolean}
   */
  taskExists(tasks, task) {
    return tasks.some((existingTask) => existingTask.task === task);
  }

  /**
   * Отображение сообщения об ошибке.
   * @param {string} message - Сообщение об ошибке.
   */
  displayError(message) {
    this.errorSpan.textContent = message;
    setTimeout(() => {
      this.errorSpan.textContent = "";
    }, 3000);
  }
}
