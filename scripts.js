// ====== DOM Elements ======
const modal = document.getElementById("task-modal");
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const descInput = document.getElementById("task-desc");
const statusSelect = document.getElementById("task-status");
const closeBtn = document.getElementById("close-modal-btn");

// Keep track of currently selected task
let currentTask = null;

/**
 * Render tasks into their respective columns
 * @param {Array} tasks - List of task objects
 */
function renderTasks(tasks) {
  const columns = {
    todo: document.querySelector('[data-status="todo"] .tasks-container'),
    doing: document.querySelector('[data-status="doing"] .tasks-container'),
    done: document.querySelector('[data-status="done"] .tasks-container'),
  };

  // Clear columns before re-render
  Object.values(columns).forEach(col => col.innerHTML = "");

  tasks.forEach(task => {
    const taskEl = document.createElement("div");
    taskEl.className = "task-div";
    taskEl.textContent = task.title;
    taskEl.addEventListener("click", () => openModal(task));
    columns[task.status].appendChild(taskEl);
  });

  updateColumnCounts(tasks);
}

/**
 * Update column headers with task counts
 */
function updateColumnCounts(tasks) {
  document.getElementById("toDoText").textContent =
    `TODO (${tasks.filter(t => t.status === "todo").length})`;
  document.getElementById("doingText").textContent =
    `DOING (${tasks.filter(t => t.status === "doing").length})`;
  document.getElementById("doneText").textContent =
    `DONE (${tasks.filter(t => t.status === "done").length})`;
}

/**
 * Open modal with task details
 * @param {Object} task - Task object to display
 */
function openModal(task) {
  currentTask = task;
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;
  modal.showModal();
}

/**
 *thi is function to Close modal
 */
function closeModal() {
  modal.close();
  currentTask = null;
}

// ====== This is Event Listeners ======
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentTask) return;

  // Update task details
  currentTask.title = titleInput.value;
  currentTask.description = descInput.value;
  currentTask.status = statusSelect.value;

  renderTasks(initialTasks);
  closeModal();
});

closeBtn.addEventListener("click", closeModal);

// ====== Initialize Board ======
document.addEventListener("DOMContentLoaded", () => {
  renderTasks(initialTasks);
});