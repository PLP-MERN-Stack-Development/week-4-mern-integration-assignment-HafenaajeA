[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19895106&assignment_repo_type=AssignmentRepo)
# MERN Stack Blog Application

A full-stack blog application built with **MongoDB**, **Express.js**, **React.js**, and **Node.js** (MERN). This project demonstrates seamless integration between front-end and back-end, including CRUD operations, API communication, state management, and advanced features.

---

## 🚀 Features

- RESTful API for blog posts and categories
- Full CRUD functionality for posts and categories
- User authentication (registration, login)
- Image upload for blog post featured images
- Pagination, search, and filtering for posts
- Comments feature for blog posts
- Optimistic UI updates and error handling
- Responsive, modern UI with React and Vite
- Clean code organization and separation of concerns

---

## 🗂️ Project Structure

```
mern-blog/
├── client/                 # React front-end
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static files
│   ├── package.json        # Client dependencies
│   └── vite.config.js      # Vite config with API proxy
├── server/                 # Express.js back-end
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── server.js           # Main server file
│   ├── package.json        # Server dependencies
│   └── .env.example        # Server environment variables example
└── README.md               # Project documentation
```

---

## ⚙️ Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm

### 1. Clone the repository

```sh
git clone https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-HafenaajeA.git
cd week-4-mern-integration-assignment-HafenaajeA
```

### 2. Set up the server

```sh
cd server
cp .env.example .env   # Edit .env with your MongoDB URI and secrets
npm install
npm run dev            # or: npm start
```

### 3. Set up the client

```sh
cd ../client
npm install
npm run dev
```

- The client will be available at [http://localhost:5173](http://localhost:5173)
- The API will be available at [http://localhost:5000/api](http://localhost:5000/api)

---

## 📝 API Documentation

### Posts

- `GET    /api/posts`           — Get all posts
- `GET    /api/posts/:id`       — Get a single post
- `POST   /api/posts`           — Create a new post
- `PUT    /api/posts/:id`       — Update a post
- `DELETE /api/posts/:id`       — Delete a post

### Categories

- `GET    /api/categories`      — Get all categories
- `POST   /api/categories`      — Create a new category

### Auth (if implemented)

- `POST   /api/auth/register`   — Register a new user
- `POST   /api/auth/login`      — Login and receive a JWT

---

## 🖼️ Screenshots

to be updated

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite, React Router, Context API, Fetch API
- **Backend:** Node.js, Express.js, Mongoose, express-validator, dotenv, cors
- **Database:** MongoDB
- **Other:** JWT (for auth), Multer (for image upload), custom middleware

---

## 📄 Environment Variables

### Server (`server/.env`)

```
MONGODB_URI=mongodb://localhost:27017/mern_blog
PORT=5000
NODE_ENV=development
JWT_SECRET=your_jwt_secret
```

### Client (`client/.env`)

```
VITE_API_URL=http://localhost:5000/api
```

---

## ✨ Features Implemented

- [x] RESTful API with Express and MongoDB
- [x] React front-end with routing and state management
- [x] CRUD for posts and categories
- [x] User authentication (JWT)
- [x] Image upload for posts
- [x] Pagination, search, and filtering
- [x] Comments on posts
- [x] Optimistic UI and error handling

---

## 📚 Resources

- [MongoDB Docs](https://docs.mongodb.com/)
- [Express.js Docs](https://expressjs.com/)
- [React Docs](https://react.dev/)
- [Node.js Docs](https://nodejs.org/en/docs/)
- [Mongoose Docs](https://mongoosejs.com/docs/)

---


Here is my repo link: `https://github.com/PLP-MERN-Stack-Development/week-4-mern-integration-assignment-HafenaajeA.git`