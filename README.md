# 🚀 BaseCampy

A secure and modular RESTful API for collaborative project management built with **Node.js**, **Express.js**, and **MongoDB**.

BaseCampy enables teams to collaborate efficiently by providing project management, task tracking, team member management, file attachments, project notes, and role-based access control. The platform is designed to support real-world project workflows with secure authentication and fine-grained authorization.

---

## 📌 Features

### 🔐 Authentication & Security

* User Registration
* Secure Login & Logout
* JWT Access Authentication
* Refresh Token Support
* Email Verification
* Forgot Password Flow
* Password Reset Functionality
* Change Password Support

### 👥 Role-Based Access Control

Three permission levels:

| Role          | Permissions                             |
| ------------- | --------------------------------------- |
| Admin         | Full project and member management      |
| Project Admin | Task and subtask management             |
| Member        | Project participation and task tracking |

---

## 📁 Project Management

* Create Projects
* Update Project Information
* Delete Projects
* View Project Details
* Track Project Members

---

## 👨‍👩‍👧‍👦 Team Member Management

* Add Members to Projects
* Manage Member Roles
* Remove Members
* View Project Members

---

## ✅ Task Management

* Create Tasks
* Assign Tasks to Team Members
* Update Task Details
* Delete Tasks
* Track Task Status
* Upload Multiple Attachments

### Task Status Workflow

```text
Todo → In Progress → Done
```

---

## 📌 Subtask Management

* Create Subtasks
* Update Subtask Details
* Mark Subtasks as Complete
* Delete Subtasks
* Member Progress Tracking

---

## 📝 Project Notes

* Create Notes
* Update Notes
* Delete Notes
* View Project Documentation

---

## 📎 File Attachments

Tasks support file uploads with:

* Multiple Attachments
* File URL Tracking
* MIME Type Tracking
* File Size Tracking
* Secure Upload Handling

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Tokens (JWT)

### File Uploads

* Multer

### Email Services

* Nodemailer

### Validation

* Express Validator

---

## 🏗 Project Architecture

```text
src/
├── controllers/
├── db/
├── middlewares/
├── models/
├── routes/
├── utils/
├── validators/
├── app.js
└── index.js
```

---

## 🔒 Security Features

* JWT Authentication
* Refresh Token Rotation
* Email Verification
* Password Reset Workflow
* Role-Based Authorization
* Request Validation
* Protected Routes
* Secure File Upload Handling
* CORS Configuration

---

## 🌐 API Modules

```text
/api/v1/auth
/api/v1/projects
/api/v1/tasks
/api/v1/notes
/api/v1/healthcheck
```

---

## 📊 Permission Matrix

| Feature                | Admin | Project Admin | Member |
| ---------------------- | ----- | ------------- | ------ |
| Create Project         | ✅     | ❌             | ❌      |
| Update/Delete Project  | ✅     | ❌             | ❌      |
| Manage Members         | ✅     | ❌             | ❌      |
| Create Tasks           | ✅     | ✅             | ❌      |
| Update Tasks           | ✅     | ✅             | ❌      |
| Delete Tasks           | ✅     | ✅             | ❌      |
| View Tasks             | ✅     | ✅             | ✅      |
| Update Subtask Status  | ✅     | ✅             | ✅      |
| Create/Delete Subtasks | ✅     | ✅             | ❌      |
| Manage Notes           | ✅     | ❌             | ❌      |
| View Notes             | ✅     | ✅             | ✅      |

---

## 🚀 Getting Started

### Prerequisites

* Node.js
* MongoDB
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/basecampy.git
```

Navigate to the project directory:

```bash
cd basecampy
```

Install dependencies:

```bash
npm install
```

Create a `.env` file and configure:

```env
PORT=
MONGODB_URI=

ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=

REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

MAILTRAP_SMTP_HOST=
MAILTRAP_SMTP_PORT=
MAILTRAP_SMTP_USER=
MAILTRAP_SMTP_PASS=

FORGOT_PASSWORD_REDIRECT_URL=
```

Start the development server:

```bash
npm run dev
```

---

## ❤️ Health Check

```http
GET /api/v1/healthcheck
```

Used to monitor application status and verify API availability.

---

## 🎯 Key Highlights

* Modular MVC Architecture
* JWT Authentication & Refresh Tokens
* Email Verification System
* Password Recovery Workflow
* Role-Based Access Control (RBAC)
* Project & Team Collaboration
* Task & Subtask Tracking
* File Attachment Support
* MongoDB Aggregation Pipelines
* Secure Backend Design

---

## 📄 License

This project is intended for educational and portfolio purposes.
