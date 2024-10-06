import DynamicWallpapers from "../components/dynamic-wallpapers/DynamicWallpapers";

import DateDisplay from "../components/time-date/date-display/DateDisplay";
import TimeDisplay from "../components/time-date/time-dispaly/TimeDisplay";

import City from "../components/weather/city/City";
import CurrentWeather from "../components/weather/current-weather/CurrentWeather";
import Temperature from "../components/weather/temperature/Temperature";

import WeatherWidget from "../components/weather/WeatherWidget";

import TasksRender from "../components/tasks/tasks-render/TasksRender";
import TaskForm from "../components/tasks/task-form/TaskForm";
import TaskActions from "../components/tasks/task-actions/TaskActions";

import saveGeolocationCoordinates from "../utils/geolocation-coordinates/saveGeolocationCoordinates";

document.addEventListener("DOMContentLoaded", async () => {
  // Инициализация компонентов
  const dynamicWallpapers = new DynamicWallpapers();
  const date = new DateDisplay();
  const time = new TimeDisplay();
  const city = new City();
  const temperature = new Temperature();
  const weather = new CurrentWeather();
  const weatherWidget = new WeatherWidget(city, temperature, weather);
  const tasksRender = new TasksRender();
  const taskForm = new TaskForm(tasksRender);
  const taskActions = new TaskActions(".tasks");

  // Отображение текущей даты и времени
  date.renderDate();
  time.renderTime();

  // Отображение виджета с погодой
  await weatherWidget.renderWeatherWidget();

  // Отображение задач из localStorage
  tasksRender.renderTasks();

  // Сохранение геолокационных координат, если они доступны
  await saveGeolocationCoordinates();

  // Для eslint
  () => {
    dynamicWallpapers;
    taskForm;
    taskActions;
  };
});
