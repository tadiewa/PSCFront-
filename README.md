4. Setup and Run React Frontend

Open a terminal in the frontend project folder (where package.json exists).

Install dependencies:

npm install


Run the frontend:

npm run dev


Frontend should start on http://localhost:3000.

React components (employee dashboard, supervisor dashboard, submission forms) will automatically call backend APIs on port 9076.

5. Test the Application

Employee:

Submit a T&S allowance application.

Check the status of submitted applications.

Supervisor:

View pending applications.

Approve or reject applications.

6. Notes

Database: The backend uses PostgreSQL to store all T&S application data.

Frontend/Backend Connection: Ensure backend runs first before opening frontend.

Ports:

Backend: 9076

Frontend: 3000

7. Optional Commands

To stop the backend: Ctrl + C in the terminal.

To stop the frontend: Ctrl + C in the terminal.

To reset database: Drop and recreate the tsallowance database.

This file gives a clear guide for supervisors or interviewers to run both backend and frontend locally without confusion.

If you want, I can also add a ready-to-use SQL script that will create the required T&S tables in PostgreSQL so they don’t have to manually set them up. This makes setup even smoother. Do you want me to do that?
