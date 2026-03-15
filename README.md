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

## 🖥️ Usage

1. **View Tasks**  
   Tasks are automatically displayed in their respective columns.

2. **Edit Tasks**  
   - Click on a task card.  
   - The modal opens with task details.  
   - Update the title, description, or status.  
   - Save changes to re‑render the board.

3. **Close Modal**  
   - Use the **×** button in the top‑right corner.  
   - Or click outside the modal (backdrop).
   - 
  ## 📐 Design Reference
- Fonts: Plus Jakarta Sans
- Layout & styling: Based on provided Figma design
- Color variables and shadows defined in :root for consistency.

## 🛠️ Technologies Used
- HTML5 – Semantic structure
- CSS3 – Flexbox, Grid, media queries, custom properties
- JavaScript (ES6+) – DOM manipulation, event handling, modular functions

## 📖 Documentation
Major functions in scripts.js include:
- renderTasks(tasks) → Renders tasks into columns
- updateColumnCounts(tasks) → Updates column headers with task counts
- openModal(task) → Opens modal with task details
- closeModal() → Closes modal
Each function is documented with JSDoc comments for clarity.

## 🤝 Contributing
Contributions are welcome!
- Fork the repository
- Create a new branch (feature/new-task)
- Commit changes
- Push to your branch
- Open a Pull Request

## 📜 License
This project is licensed under the MIT License.
You are free to use, modify, and distribute with attribution.

## 🙌 Acknowledgements
- Figma design inspiration provided in project brief
- Google Fonts for typography
- MDN Web Docs for reference

