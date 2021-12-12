import './style.css';
import { Task, appendImg } from './task.js';
import Refresh from './img/refresh.png';
import Enter from './img/arrow.png';

new Task({ description: 'Wash the dishes', completed: false, index: 1 }).add();
new Task({ description: 'Complete To Do List project', completed: false, index: 2 }).add();
new Task({ description: 'Attend standup meeting', completed: false, index: 3 }).add();
const toDoList = document.querySelector('#to-do-list');
const refreshContainer = document.querySelector('#refresh');
const enterContainer = document.querySelector('#enter');

window.onload = () => {
  Task.populate(toDoList);
  appendImg(Refresh, refreshContainer, false);
  appendImg(Enter, enterContainer, false);
};
