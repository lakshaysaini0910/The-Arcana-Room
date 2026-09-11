# 🔮 Arcana Room

Arcana Room is a full-stack Tarot web application built using the MERN stack. It allows users to explore the Rider-Waite tarot deck, draw cards, and receive tarot readings through an interactive and responsive interface.

## 🚀 Features

- View the complete Rider-Waite tarot deck
- Shuffle and draw tarot cards
- Card Library with detailed card information
- Responsive user interface
- REST API built with Express.js
- MongoDB Atlas database integration
- React frontend with modern component-based architecture

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## 📁 Project Structure

```
Arcana-Room/
│
├── client/
│   ├── src/
│   ├── public/
│   └── ...
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   └── ...
│
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd server
npm install
```

## ▶️ Run the application

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

The backend will run on:

```
http://localhost:5000
```

## 🌐 API Endpoint

```
GET /api/cards/rider-waite
```

Returns all Rider-Waite tarot cards stored in MongoDB Atlas.

## 📦 Future Features

- User Authentication
- Saved Readings
- Reading History
- Favorite Cards
- Multiple Tarot Decks
- Daily Card Reading
- Three-Card & Celtic Cross Spreads

## 👨‍💻 Author

**Lakshay Saini**

---

Made with ❤️ using the MERN Stack.