const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const poster = document.getElementById("poster");
const posterTitle = document.getElementById("poster-title");
const filterButtons = document.querySelectorAll(".filters button");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

updatePoster();
renderTodos();

/* ADD TASK */
form.addEventListener("submit", e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  todos.push({
    id: Date.now(),
    text,
    completed: false
  });

  save();
  input.value = "";
});

/* FILTERS */
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;

    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    updatePoster();
    renderTodos();
  });
});

/* POSTER STATE */
function updatePoster() {
  poster.className = "";
  poster.classList.add(`poster-${currentFilter}`);

  if (currentFilter === "active") {
    posterTitle.textContent = "ACTIVE BOUNTIES";
  } else if (currentFilter === "completed") {
    posterTitle.textContent = "CLOSED CASES";
  } else {
    posterTitle.textContent = "WANTED";
  }
}

/* RENDER */
function renderTodos() {
  list.innerHTML = "";

  let visible = todos;
  if (currentFilter === "active") {
    visible = todos.filter(t => !t.completed);
  }
  if (currentFilter === "completed") {
    visible = todos.filter(t => t.completed);
  }

  visible.forEach(todo => {
    const li = document.createElement("li");
    li.style.setProperty("--rotate", `${Math.random() * 6 - 3}deg`);

    if (todo.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = todo.text;
    span.onclick = () => toggle(todo.id);

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => remove(todo.id);

    li.append(span, btn);
    list.appendChild(li);
  });
}

function toggle(id) {
  todos = todos.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  save();
}

function remove(id) {
  todos = todos.filter(t => t.id !== id);
  save();
}

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
