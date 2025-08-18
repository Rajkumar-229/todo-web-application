# Todo App – Full-Stack MERN Application

## Project Overview
Todo App is a full-stack task management application built using **React, Node.js, Express, and MongoDB**. It allows users to **create, read, update, and delete tasks** with real-time updates. The project demonstrates professional full-stack development practices including REST API design, state management, and database integration.

**Key Features:**
- Create, edit, delete, and mark tasks as completed.
- Persistent storage using MongoDB.
- RESTful API built with Express.js and TypeScript.
- Responsive and clean frontend using React.js and Tailwind CSS.
- Centralized error handling for backend.
- Separation of concerns: frontend, backend, and services clearly structured.

## File Structure
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

## Tech Stack
- **Frontend:** React.js, TypeScript, Tailwind CSS, Axios  
- **Backend:** Node.js, Express.js, TypeScript  
- **Database:** MongoDB, Mongoose  
- **Tools:** Git, VSCode, Postman n

## Features
- API Endpoints
- Method	Endpoint	Description
- GET	/api/tasks	Get all tasks
- GET	/api/tasks/:id	Get task by ID
- POST	/api/tasks	Create new task
- PUT	/api/tasks/:id	Update task by ID
- DELETE	/api/tasks/:id	Delete task by ID

## Project Workflow
- Frontend communicates with backend via Axios service (`taskService.ts`).
- Backend handles requests in controllers, performing CRUD operations with MongoDB.
- Middleware handles errors centrally to ensure stable backend operations.
- Frontend updates UI state based on backend responses in real-time.

## Highlights
- Full TypeScript support for type safety on both frontend and backend.
- Centralized service layer in frontend for API calls, keeping the code clean and maintainable.
- Error handling middleware ensures a robust and stable backend.
- Clean and maintainable file structure, making the project easy to scale.
