# MindSpark-Blogs Website

This is a full-stack blogging application built with a **React** frontend and an **Express.js** backend. The application allows users to register, log in, create blogs, view blogs, and manage their blogs through a dashboard.

## Features

### Frontend

- Built with **Vite** for fast development.
- **TailwindCSS** for responsive and modern UI design.
- **axios** for robust HTTP requests and API communication
- **React Router** for navigation.
- **React Toastify** for notifications.
- **Context API** for state management.
- **react-icons** for accessing popular icon libraries with React components
- **react-hook-form** for performant form handling with built-in validation
- **framer-motion** for fluid animations and interactive UI transitions

### Backend

- Built with **Express.js** for creating a robust backend framework.
- **MongoDB** for database storage, providing a NoSQL solution for scalability.
- **Mongoose** for database modeling and schema validation.
- **JWT** for secure user authentication and session management.
- **Bcryptjs** for hashing passwords to enhance security.
- **Cors** for enabling cross-origin resource sharing between frontend and backend.
- **Dotenv** for managing environment variables securely.
- **Multer** for handling file uploads, such as images for blogs.
- **Validator** for input validation to ensure data integrity.
- **Nodemon** for automatic server restarts during development.

- Middleware for authentication and validation.

## Project Structure

### Backend

- **`controllers/`**: Contains logic for user and blog operations.
- **`models/`**: Mongoose schemas for users and blogs.
- **`routes/`**: API routes for users and blogs.
- **`middlewares/`**: Authentication and file upload middleware.
- **`uploads/`**: Stores uploaded images.

### Frontend

- **`src/components/`**: Reusable UI components like Navbar, Footer, BlogCard, etc.
- **`src/pages/`**: Pages like Home, Blogs, About, Contact, Login, Signup, and Dashboard.
- **`src/context/`**: Context API for global state management.
- **`src/assets/`**: Static assets like images.

## Installation

### Prerequisites

- Node.js and npm installed.
- MongoDB connection string.

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```
   npm install or yarn
   ```
3. Start the development server:
   ```
   npm run dev
   ```
