# Online Fine Payment System 🚦💰

This repository contains an online fine payment system consisting of a client-side frontend built with React.js and a server-side backend developed using Node.js and Express.js. The project uses a MySQL database for data storage.

## Technologies Used 🛠️
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MySQL

## Getting Started 🚀
To get started with the project, follow these steps:

### Prerequisites 📋
- Node.js and npm (Node Package Manager) installed on your machine.
- MySQL installed (you can use XAMPP for easy setup).

### Setting Up the Frontend 🌐
1. Navigate to the `client` folder: `cd client`
2. Install the required dependencies: `npm install`
3. Start the frontend development server: `npm start`

### Setting Up the Backend 🖥️
1. Open a new terminal window and navigate to the `server` folder: `cd server`
2. Install the required dependencies: `npm install`
3. Start the backend server: `npm start`

## Usage 🖱️
Once both the frontend and backend servers are running, you can access the application through your web browser. 
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000) (or whichever port your backend is configured to run on)

## Acknowledgments 🙏
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

### Setting Up the Database 🗄️
1. Start the XAMPP server to run MySQL.
2. Create a new MySQL database and execute the following SQL commands to create the necessary tables:

```sql
-- Create Database for ezfine
CREATE Database ezfine;

-- Create table for fines
CREATE TABLE fines (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,                     -- Unique identifier for each fine
    fine_type VARCHAR(255) NOT NULL,                           -- Type of fine (e.g., parking, speeding)
    fine_amount DECIMAL(10,2) NOT NULL,                        -- Amount of the fine
    date VARCHAR(20) NOT NULL,                                 -- Date when the fine was issued
    license_number VARCHAR(50) NOT NULL,                      -- License number of the vehicle
    fine_percentage DECIMAL(5,2) NOT NULL,                     -- Percentage of the fine applicable (if any)
    phone_number VARCHAR(20) NOT NULL                          -- Contact phone number
);

-- Create table for users
CREATE TABLE users (
    id INT(100) AUTO_INCREMENT PRIMARY KEY,                     -- Unique identifier for each user
    email VARCHAR(100) NOT NULL,                               -- Email address of the user
    username VARCHAR(100) NOT NULL,                             -- Username for the user
    password VARCHAR(100) NOT NULL                              -- Hashed password for user authentication
);

-- Create table for officers
CREATE TABLE officers (
    id INT(100) AUTO_INCREMENT PRIMARY KEY,                     -- Unique identifier for each officer
    email VARCHAR(100) NOT NULL,                               -- Email address of the officer
    username VARCHAR(100) NOT NULL,                            -- Username for the officer
    password VARCHAR(100) NOT NULL                             -- Hashed password for officer authentication
);

-- Create table for payments
CREATE TABLE payments (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,                      -- Unique identifier for each payment
    name VARCHAR(255) NOT NULL,                                 -- Name of the person making the payment
    licenseNumber VARCHAR(50) NOT NULL,                         -- License number associated with the payment
    amount DECIMAL(10,2) NOT NULL,                              -- Amount paid
    date DATE NOT NULL                                          -- Date of the payment
);
