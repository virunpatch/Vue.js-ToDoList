# 📝 Simple To-Do List Application

## ✨ Overview

This is a single-page To-Do List application built using **Vue 3** and the **Composition API** (Script Setup syntax). The project is designed to demonstrate fundamental front-end development skills, component composition, and state management without the need for complex external libraries like Vuex or Pinia.

## 🚀 Features

* **Create:** Users can add new To-Do items via an input form.
* **Read:** Displays a list of all current To-Do items.
* **Update:** Users can toggle the completion status of any item by clicking on the text.
* **Delete:** Users can remove items from the list using the "ลบ" (Delete) button.
* **Local Data Persistence:** All To-Do items are automatically saved to the browser's **Local Storage**, ensuring the list remains intact even after the browser is closed or the page is refreshed.
* **Responsive Design:** The UI adjusts smoothly to look great on various screen sizes, from desktop to mobile.

## 🛠️ Technology Stack

| Technology | Role |
| :--- | :--- |
| **Vue 3** | Core Framework (using Composition API) |
| **Vite** | Build Tool and Development Server |
| **JavaScript** | Application Logic |
| **CSS** | Styling and Responsive Layout |

## ⚙️ Key Vue Concepts Demonstrated

| Concept | Implementation |
| :--- | :--- |
| **Component Composition** | The application is structured using modular components: `App.vue` (parent), `AddTodoForm.vue`, and `TodoItem.vue`. |
| **Props Down, Events Up** | Data flows down from `App.vue` to its children using **`props`**, and user actions are communicated back up using **`defineEmits`**. |
| **Reactivity** | Uses the **`ref`** function for state management and to ensure the UI updates instantly when data changes. |
| **Lifecycle Hooks** | Utilizes **`onMounted`** to load data from Local Storage when the component loads. |
| **Watchers** | Uses the **`watch`** function to automatically save the entire To-Do list to Local Storage whenever an item is added, deleted, or its status is toggled. |
| **Conditional Rendering & List Rendering** | Employs `v-for` to render the list and `v-if` to display the "empty list" message. |

## 💻 Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_GITHUB_REPO_LINK]
    cd vue-simple-todo
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will be available at `http://localhost:5173` (or similar port).

## 🔗 Live Demo

[https://virunpatch.github.io/Vue.js-ToDoList/]
