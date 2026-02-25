'use strict';

console.log('SCRIPT LOADED');

let currentSemester = 1;
let currentWeek = 1;
const store = {};

const sem1Btn = document.querySelector('.sem-1');
const sem2Btn = document.querySelector('.sem-2');
const weekButtons = document.querySelectorAll('.weeks-btn button');

const form = document.getElementById('todoForm');
const input = document.getElementById('taskInput');
const tasksUl = document.getElementById('tasksList');

const makeKey = () => `${currentSemester}-${currentWeek}`;

const getTasks = () => store[makeKey()] || [];

const setTasks = (arr) => {
  store[makeKey()] = arr;
};

const setActiveSemester = () => {
  sem1Btn.classList.toggle('active', currentSemester === 1);
  sem2Btn.classList.toggle('active', currentSemester === 2);
};

const setActiveWeek = () => {
  weekButtons.forEach((b) => {
    b.classList.toggle('active', Number(b.textContent) === currentWeek);
  });
};

const render = () => {
  tasksUl.innerHTML = '';
  const tasks = getTasks();

  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = `task${t.done ? ' done' : ''}`;

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = t.done;

    cb.addEventListener('change', () => {
      const updated = getTasks().map((task, idx) =>
        idx === i ? { ...task, done: cb.checked } : task
      );
      setTasks(updated);
      render();
    });

    const span = document.createElement('span');
    span.textContent = t.text;

    const del = document.createElement('button');
    del.className = 'deleteBtn';
    del.type = 'button';
    del.textContent = '✕';

    del.addEventListener('click', () => {
      const updated = getTasks().filter((_, idx) => idx !== i);
      setTasks(updated);
      render();
    });

    li.appendChild(cb);
    li.appendChild(span);
    li.appendChild(del);

    tasksUl.appendChild(li);
  });
};

const addTask = () => {
  const text = input.value.trim();
  if (!text) return;

  const tasks = getTasks();
  setTasks([...tasks, { text, done: false }]);

  input.value = '';
  input.focus();
  render();
};

sem1Btn.addEventListener('click', () => {
  currentSemester = 1;
  currentWeek = 1;
  setActiveSemester();
  setActiveWeek();
  render();
});

sem2Btn.addEventListener('click', () => {
  currentSemester = 2;
  currentWeek = 1;
  setActiveSemester();
  setActiveWeek();
  render();
});

weekButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentWeek = Number(btn.textContent);
    setActiveWeek();
    render();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask();
});

setActiveSemester();
setActiveWeek();
render();
