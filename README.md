
# React Form with Node.js & MongoDB

A simple full-stack web application that allows users to submit their **name** and **email** through a React form, stores the data in **MongoDB**, and provides success/error notifications. Built with **React**, **Axios**, **Node.js**, **Express**, and **MongoDB**.



## Features

- Responsive user form using **React** and **Tailwind CSS**
- Real-time form submission with **Axios**
- Backend API built with **Node.js** and **Express**
- Data storage in **MongoDB**
- CORS enabled to allow communication between frontend and backend
- Success and error alerts for better UX



## Technologies Used

- **Frontend:** React, Axios, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Others:** CORS for cross-origin requests

---

## Project Structure

```

project/
├── backend/
│   └── app.js           # Node.js + Express server
├── frontend/
│   └── src/
│       └── Form.jsx     # React form component
└── README.md

````

---

## Installation & Setup

### Backend

1. Install dependencies:
```bash
npm install express mongoose cors
````

2. Start the server:

```bash
node app.js
```

3. Make sure **MongoDB** is running locally:

```bash
mongod
```

### Frontend

1. Install dependencies:

```bash
npm install axios
```

2. Start the React app:

```bash
npm start
```

3. Open in browser:

```
http://localhost:3000
```

---

## Usage

1. Open the React app in your browser.
2. Fill in the **Name** and **Email** fields.
3. Click **Submit**.
4. Data will be saved to MongoDB and a success alert will appear.
5. Errors (like missing fields) will show an error alert.

---

## Screenshots

*(Add screenshots of the form and alerts here for better visual understanding)*

---

## License

This project is open source and free to use.

