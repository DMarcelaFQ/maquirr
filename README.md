<h1 align="center">Maquirrú Hair Beauty</h1>

<h3>Features:</h3>

- ✅ User registration
- 🔑 User login  
- 🗓 Appointment reservation
- ❌ Appointment cancellation

<h3 align="center">Technologies:</h3>


<div align="center">
   
### Frontend
  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![React Context](https://img.shields.io/badge/React_Context-61DAFB?style=for-the-badge&logo=react&logoColor=white)

### Backend
   
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 📌 Prerequisites
Make sure you have the following installed on your system:
- [PostgreSQL](https://www.postgresql.org/download/)

### 🛠️ Installation Steps

1️⃣ **Install PostgreSQL** on your machine.  
2️⃣ **Create a new database** in PostgreSQL.  
3️⃣ **Set up environment variables**:  
   - Create a `.env` file in the root directory and add the following configuration:

```env
PORT= 3000 #Port name (example: 3000)
DB_TYPE = postgres #Database type (example:postgres)
DB_HOST = localhost #Database address on the server (exaple: localhost)
DB_PORT = 5432 #Database port (example: 5432)
DB_USER = #Database username (example:postgres)
DB_PASSWORD =  #Database password
DB_NAME =appointments_app #Database name (example:appointments_app)
DB_SYNC = true #true or false depending on user preferences
DB_LOGGING = #true or false depending on user preferences

```
4️⃣ Install dependencies:
Before starting the project, install the required dependencies for both the backend and frontend:
1. Open a terminal in the back folder and run:
`npm install`
2. Open another terminal in the vite-project folder and run:
`npm install`
This will ensure that all necessary packages are installed.

5️⃣ Start the project:
1. Run the backend: In the terminal opened in the back folder, run:
`npm run start`
2. Run the frontend: In the terminal opened in the vite-project, run:
`npm run dev`
3. Access the application: After running the frontend, you'll see an output like this:
`➜  Local:   http://localhost:.../ `
Click on the provided link to open the application in your browser.

### ✨ Now you are all set to use ✨

### 🌍 Deployment
Find the Swagger API documentation at: Deployment
