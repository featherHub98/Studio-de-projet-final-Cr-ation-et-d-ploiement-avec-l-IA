# 🤠 Cowboy Todo Board

A pure **HTML, CSS, and JavaScript** Todo List web application with a **Western / Wanted Poster aesthetic**.

Tasks are displayed as pinned notes on dynamically changing posters:
- **WANTED** (All tasks)
- **ACTIVE BOUNTIES** (Active tasks)
- **CLOSED CASES** (Completed tasks)

The application uses **no frameworks, no build tools, and no external assets**.  
All data is persisted locally using the browser’s `localStorage`.

---

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Filter tasks:
  - All
  - Active
  - Completed
- Dynamic poster themes per filter
- Burnt paper edges using CSS `mask-image`
- Paper tear effect on completed posters
- Ambient dust overlay for visual depth
- Persistent storage via `localStorage`

---

## Tech Stack

- **HTML5** – semantic structure
- **CSS3** – advanced visual effects (masks, overlays, pseudo-elements)
- **Vanilla JavaScript (ES6)** – application logic and state management
- **Browser Local Storage** – persistence

No dependencies. No frameworks.

---

## File Structure

```text
todo-cowboy/
│
├── index.html     # Application markup
├── style.css      # Cowboy-themed styles and effects
├── script.js      # Application logic
├── README.md      # Project overview
└── SPEC.md        # Technical specifications
