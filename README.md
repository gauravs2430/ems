# Employee Management System (EMS)

## 📌 Project Overview
The Employee Management System (EMS) is a modern, responsive role-based web application designed to streamline internal company workflows. Built with **React.js**, **Vite**, and **Tailwind CSS**, it features a clean and interactive user interface for both Administrators and Employees to efficiently manage and track tasks.

## 🚀 Key Features

### 🔐 Role-Based Authentication
- Secure login portal separating generic user access.
- Distinct dashboards catered specifically to **Admins** and **Employees**, determined dynamically at login.

### 👑 Admin Dashboard (Management Portal)
- **Task Assignment:** Admins can effortlessly create and assign new tasks to specific employees.
- **Task Overview:** A centralized view allows admins to track all tasks across the organization.
- **Real-time Metrics:** Admins have visibility over the total number of tasks, successful completions, active tasks, and failed objectives across the entire team.

### 👤 Employee Dashboard (Personal Portal)
- **Task Tracking:** Employees can view their assigned task lists directly upon login.
- **Status Updates:** Employees can transition tasks through various states:
  - **Accept Task:** Acknowledge new assignments.
  - **Complete Task:** Mark tasks as successfully done.
  - **Failed Task:** Flag issues preventing task completion.
- **Personalized Metrics:** Employees see a summary of their performance, including active, new, completed, and failed tasks.

## 🛠️ Technological Stack
- **Frontend Framework:** React.js (Hooks, Context API for state management)
- **Build Tool:** Vite (for fast, optimized development and production builds)
- **Styling:** Tailwind CSS (utility-first CSS framework for highly responsive and custom UI)
- **Data Persistence:** LocalStorage (Simulated database structure for rapid prototyping without the need for a backend)

## 📂 Project Configuration & Architecture
- **`src/components/Auth`**: Authentication gateway featuring the primary `Login` interface.
- **`src/components/Dashboard`**: Core layouts managing conditional rendering between `AdminDashboard` and `EmployeeDashboard`.
- **`src/components/TaskList`**: Interactive task cards handling diverse states (`AcceptTask`, `CompleteTask`, `FailedTask`, `NewTask`).
- **`src/components/Others`**: Reusable structural components like the application `Header`, Admin `CreateTask` panel, and `TaskListNumbers` statistics widget.
- **`src/context/AuthProvider.jsx`**: Centralized React Context providing global user data state to all generic and protected routes.
- **`src/utils/LocalStorage.jsx`**: Bootstrapping script initializing and handling mock user data (Admins and Employees) within the browser's storage engine.

## 💡 Resume Highlights (What I achieved in this project)
- **Global State Management:** Solidified understanding of the React Context API to propagate user authentication and real-time state across a deeply nested component tree.
- **Conditional Layout Rendering:** Achieved dynamic, role-restricted component rendering ensuring users only access authorized dashboards.
- **State Persistence:** Engineered a mock-backend using the browser's `localStorage` to replicate real-world CRUD (Create, Read, Update, Delete) operations reliably.
- **Modern UI/UX Implementation:** Leveraged Tailwind CSS to rapidly prototype and design a responsive, accessible, and highly styled web application interface.

## ⚙️ How to Run the Project Locally
1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd ems`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`).

### Default Testing Credentials:
**Admin Portal:**
- **Email:** `admin@me.com`
- **Password:** `123`

**Employee Portal:**
- **Email:** `employee1@company.com` (up to `employee5@company.com`)
- **Password:** `123`
