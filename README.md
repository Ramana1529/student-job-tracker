# 🎓 Student Job Tracker

A simple web app to track job applications.

## 🚀 Features

- **Add Job Application** (Company, Role, Status, Date, Link)
- **View Applications** (List with filtering by status/date)
- **Update Status** (Change application status)
- **Delete Application** (Remove a job entry)

## 🛠 Tech Stack

- **Frontend:** React (Hooks)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (MongoDB Atlas)
- **Deployment:**
  - Frontend: Vercel
  - Backend: Render / Railway

## 📂 Project Structure
```
student-job-tracker/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js
│   │   ├── model/
│   │   │   ├── model.js
│   │   ├── routes/
│   │   │   ├── routes.js
│   │   ├── index.js
│   ├── .env
│   ├── package.json
│   ├── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── JobForm.js
│   │   │   ├── JobList.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   ├── App.js
│   ├── public/
│   ├── .vercel/
│   ├── package.json
│
├── README.md
```

## 📦 Setup

1. **Clone the Repo**
   ```sh
   git clone https://github.com/your-username/student-job-tracker.git
   cd student-job-tracker
   ```

2. **Setup Backend**
   ```sh
   cd backend
   npm install
   npm start
   ```
   Backend runs at: `http://localhost:5000`

3. **Setup Frontend**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```
   Frontend runs at: `http://localhost:3000`

4. **Environment Variables**
   - Create `.env` files in both frontend and backend folders.
   - Backend:
     ```
     MONGO_URI=your-mongodb-connection-string
     PORT=5000
     ```
   - Frontend:
     ```
     REACT_APP_API_BASE_URL=https://your-backend-url
     ```

## 🌍 Live Demo

- **Frontend:** [Vercel Link](https://frontend-orcin-delta-55.vercel.app/)
- **Backend:** [Render/Railway Link](https://student-job-tracker-production-767a.up.railway.app)

## 🎯 Next Steps

- Improve UI
- Add authentication
- Save job notes
