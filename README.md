# 📚 Task LMS

A Learning Management System (LMS) built with **React (Vite)**, **Node.js/Express**, and **MongoDB**.  
It allows students to browse courses, enroll, and track progress, while instructors and admins manage content and users.

---

## 🚀 Features

- 🔐 Authentication (JWT-based login & logout)
- 👩‍🎓 Student dashboard (view & enroll in courses)
- 👨‍🏫 Instructor dashboard (manage courses & students)
- 🛠 Admin dashboard (manage users & system settings)
- 📱 Responsive design with TailwindCSS
- ⚡ Fast front-end powered by React + Vite

---

## Live Demo

👉 [Try the app here](https://task-lms-psqm.vercel.app)

## 🛠 Tech Stack

**Frontend:** React, Vite, TailwindCSS, React Router  
**Backend:** Node.js, Express, MongoDB, JWT Authentication  
**Deployment:** Vercel (frontend), Render/ (backend + DB)

---

## 📂 Project Structure

```bash
.
└── client
    ├── public
    ├── src
    │   ├── assets             # Images, icons, and static assets
    │   ├── components
    │   │   ├── admin
    │   │   └── ...
    │   ├── auth
    │   │   ├── logining
    │   │   └── logout
    │   ├── hook             # Custom React hooks
    │   │   └── useAuth
    │   ├── instructor
    │   │   ├── AllCourses
    │   │   └── ...
    │   ├── student
    │   │   ├── Courses
    │   │   ├── Examps
    │   │   ├── Lessons
    │   │   └── Quize
    │   ├── Ui               # Reusable UI components
    │   │   ├── Button
    │   │   └── MainButton
    │   ├── Footer
    │   ├── Hero
    │   ├── NavBar
    │   ├── ProtectedRoute
    │   ├── SearchBar
    │   ├── ...
    │   ├── context
    │   │   └── AuthProvider
    │   ├── pages
    │   │   ├── admin
    │   │   │   └── AdminDashboard
    │   │   ├── instructor
    │   │   │   └── InstructorDashobard
    │   │   ├── student
    │   │   │   └── StudentDashoboard
    │   │   ├── Home
    │   │   ├── AboutUs
    │   │   ├── Contact
    │   │   ├── NotFound
    │   │   └── ...
    │   ├── App.jsx Main App component
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── vercel.json
    ├── package.json
    ├── README.md                       # Documentation
    └── vite.config.jsx
```

## ⚡ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/task-lms.git
cd task-lms
```

### 2. Install dependencies

- Frontend:

```bash
  cd client
  npm install
```

- Backend:

```bash
  cd server
  npm install
```

### 4. Run the app

- Start frontend:

```bash
  cd client
  npm run dev
```

npm run dev

- Start backend:

```bash
  cd server
  npm run dev
```

## 🌍 Deployment

- Frontend deployed on Vercel

- Backend deployed on Render

## 📸 Screenshots

![Screenshot](./public/Screenshot_lms.png)

## 👤 Author

MOHAMED AWAD – [GitHub](https://github.com/midrra)
| [LinkedIn](https://www.linkedin.com/in/mohamed-3wad/)
