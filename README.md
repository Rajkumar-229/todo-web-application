# Todo App  Full-Stack MERN Application

##  Project Overview
Todo App is a full-stack task management application built using **React, Node.js, Express, and MongoDB**.  
It allows users to create, read, update, and delete tasks with real-time updates.

This project demonstrates professional full-stack development practices including REST API design, state management, and database integration.

---

##  Key Features
-  Create, edit, delete, and mark tasks as completed
-  Persistent storage using MongoDB
-  RESTful API built with Express.js and TypeScript
-  Responsive and clean frontend using React.js and Tailwind CSS
-  Centralized error handling for backend
-  Clear separation of concerns: frontend, backend, and services

---

##  File Structure
todo-app/
├─ backend/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ task.controller.ts
│  │  ├─ middlewares/
│  │  │  └─ errorHandler.ts
│  │  ├─ models/
│  │  │  └─ task.model.ts
│  │  ├─ routes/
│  │  │  └─ task.routes.ts
│  │  ├─ validators/
│  │  │  └─ task.dto.ts
│  │  └─ index.ts
│  ├─ package.json
│  └─ tsconfig.json
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  │  └─ TaskItem.tsx
│  │  ├─ services/
│  │  │  └─ taskService.ts
│  │  ├─ App.tsx
│  │  ├─ index.tsx
│  │  └─ styles/
│  │     └─ index.css
│  ├─ package.json
│  └─ tsconfig.json
├─ .gitignore
└─ README.md

---

##  Tech Stack
### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript

### Database
- MongoDB
- Mongoose

### Tools
- Git & GitHub
- VSCode
- Postman

---

##  API Endpoints

| Method | Endpoint        | Description        |
|--------|----------------|--------------------|
| GET    | `/api/tasks`   | Get all tasks      |
| GET    | `/api/tasks/:id` | Get task by ID   |
| POST   | `/api/tasks`   | Create new task    |
| PUT    | `/api/tasks/:id` | Update task by ID |
| DELETE | `/api/tasks/:id` | Delete task by ID |

---

##  Project Workflow
1. Frontend communicates with backend via Axios service (`taskService.ts`).
2. Backend handles requests in controllers, performing CRUD operations with MongoDB.
3. Middleware handles errors centrally to ensure stable backend operations.
4. Frontend updates UI state based on backend responses in real-time.

---

##  Highlights
- Full TypeScript support for type safety on both frontend and backend.
- Centralized service layer in frontend for API calls  clean and maintainable code.
- Error handling middleware ensures a robust and stable backend.
- Clean file structure  makes the project easy to scale.

---

##  Installation & Setup

### Clone the repository
```bash
git clone https://github.com/your-username/todo-web-application.git
cd todo-web-application
```

### Backend Setup
```bash
cd backend
npm install
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

---
