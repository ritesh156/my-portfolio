# Magical Academic Portfolio Website

A full-stack personal portfolio website for Ritesh Kumar, featuring a magical academic theme (inspired by Harry Potter but professional), built with React, Vite, Tailwind CSS, Framer Motion, Java Spring Boot, and MySQL.

## Prerequisites

- Node.js (v18+)
- Java JDK 17+
- MySQL (Running on default port 3306)
- Maven

## Setup Instructions

### 1. Database Setup
1. Ensure MySQL is running.
2. The Spring Boot application is configured to connect as `root` with no password (`""`). If your MySQL configuration is different, update `backend/src/main/resources/application.properties`.
3. Open MySQL client or a tool like MySQL Workbench.
4. Run the SQL commands in `database/schema.sql` to initialize the `portfolio_db` database, tables, and seed data.

### 2. Backend Setup (Spring Boot)
1. Open a terminal and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Build and run the Spring Boot application using Maven Wrapper (or your installed Maven):
   ```bash
   ./mvnw spring-boot:run
   ```
   *(On Windows use `mvnw.cmd spring-boot:run` or just `mvn spring-boot:run`)*
3. The backend API will start at `http://localhost:8080`.

### 3. Frontend Setup (React + Vite)
1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The frontend will be available at `http://localhost:5173`.

## Future Modifications

Code locations that will require future updates when URLs or assets become available are marked with comments:
`// MODIFY:`

Use your code editor's search function to find `// MODIFY:` across the codebase (specifically in `frontend/src/components/*`) to quickly update:
- Profile picture
- Resume PDF link
- GitHub links
- LinkedIn links
- Project live & GitHub URLs
- Certificate URLs
