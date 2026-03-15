# Kanban Task Management Board

A dynamic, responsive Kanban board built with **HTML, CSS, and JavaScript**.  
This project displays tasks from an initial dataset, organizes them into columns based on status, and allows users to view and edit task details via a modal dialog.

---

## 📋 Features

- **Dynamic Task Rendering**  
  Tasks are generated from `initialData.js` and placed into the correct column (`TODO`, `DOING`, `DONE`) based on their status.

- **Interactive Modal**  
  Clicking a task opens a modal with:
  - Editable title and description fields
  - Status dropdown to move tasks between columns
  - Close button aligned top‑right

- **Responsive Design**  
  - Works seamlessly on desktop, tablet, and mobile
  - Modal backdrop for focus
  - Sidebar hides on smaller screens

- **Maintainable Code Structure**  
  - Modular JavaScript functions with single responsibility
  - JSDoc comments for documentation
  - Clean CSS with variables and media queries

---

## 📂 Project Structure
kanban-board/
│── index.html          # Main HTML structure
│── styles.css          # Global and responsive styles
│── scripts.js          # DOM manipulation & modal logic
│── initialData.js      # Initial tasks dataset
│── assets/             # Logos, icons, favicon