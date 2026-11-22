# 📸 MERN Social Feed App

A foundational full-stack MERN (MongoDB, Express.js, React, Node.js) application built to master end-to-end media handling, cloud storage integration, and client-server communication. Users can upload images with captions and view all shared posts in a unified feed.

---

## ✨ Features

- **Create Post:** Upload an image file alongside a caption and publish it to the feed.
- **Live Feed:** Automatically fetches and renders all submitted posts stored in MongoDB.
- **Cloud Media Pipeline:** Handles multipart file uploads locally in memory via **Multer**, uploads them to **ImageKit.io**, and stores the returned CDN URL in the database rather than bloating MongoDB with raw binary files.
- **Modular Service Architecture:** Isolates cloud storage logic inside a dedicated `storage.service.js` module for cleaner, maintainable backend code.

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite — running on port `5127`), CSS / SCSS, Axios / Fetch API
- **Backend:** Node.js, Express.js (running on port `3000`)
- **Database:** MongoDB & Mongoose
- **Cloud Storage:** [ImageKit.io](https://imagekit.io/)
- **Middleware & Utilities:** `multer` (multipart/form-data parsing), `cors` (Cross-Origin Resource Sharing), `dotenv` (environment variable management)

---

## 🧠 Architecture & Key Concepts Learned

### 1. Cloud Storage Flow (ImageKit.io + `storage.service.js`)
Instead of saving images directly on the server's local disk or inside MongoDB, the app follows production media-handling practices:
1. The React frontend sends the image file and caption as `FormData`.
2. **Multer** intercepts the `multipart/form-data` request on the backend and extracts the file buffer.
3. A dedicated **`storage.service.js`** file encapsulates the ImageKit SDK configuration and upload logic, keeping route controllers clean and decoupled from third-party provider code.
4. **ImageKit.io** processes the file and returns a public, optimized CDN URL.
5. Only the **image URL** and **caption** are saved in MongoDB, keeping database queries fast and lightweight.

### 2. Connecting Two Separate Servers (`CORS`)
During development, the frontend and backend run as two independent servers on different ports:
- **Frontend (Vite):** `http://localhost:5127`
- **Backend (Express):** `http://localhost:3000`

Because browsers block cross-origin requests by default, the **`cors`** middleware is configured on the Express server to safely allow API requests from `http://localhost:5127`.

### 3. Environment Variables (`.env`)
Sensitive credentials—such as the MongoDB connection URI and ImageKit Public Key, Private Key, and URL Endpoint—are stored in a `.env` file (excluded via `.gitignore`) and loaded securely via `dotenv`.

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/posts` *(or your route)* | Uploads image to ImageKit and saves post (`imageUrl`, `caption`) to MongoDB | `multipart/form-data` (`image`, `caption`) |
| `GET` | `/api/posts` *(or your route)* | Fetches all posts from MongoDB to display on the feed | None |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB (Local instance or MongoDB Atlas URI)
- Free [ImageKit.io](https://imagekit.io/) account

### 1. Clone the Repository
```bash
git clone [https://github.com/Suryansh-CodeFramer/](https://github.com/Suryansh-CodeFramer/)<your-repo-name>.git
cd <your-repo-name>
