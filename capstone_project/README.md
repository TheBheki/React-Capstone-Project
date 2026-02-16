# Capstone Project

A responsive event managment dashboard built with React, Bootstrap 5, and Formik. This web application allows a user to securely register, log in and manage events.

# Features

1. Secure Authentication:
   - Custom `AuthContext` managing user sessions.
   - Protected Routes: Automated redirection for unauthorized users.
   - Persistent login state using `localStorage`.
2. Event Managment (CRUD):
   - **Create:** Add events with name, description, date, time and location.
   - **Read:** View all events in a responsive grid on the Dashboard.
   - **Update:** Modify existing event details via dynamic routing (`/edit-event/:id`).
   - **Delete:** Remove events with state synchronization.
3. Robust Forms:
   - Powered by Formik for state management.
   - Schema-based validation using **Yup** (error messages and field highlighting).
4. Support Center:
   - Help and support page using `react-bootstrap` accordions and alerts.
5. Responsive Design:
   - Mobile-friendly layout using Bootstrap 5 utility classes and components.

# Tech Stack

- React 18 - Frontend Library
- React Router v6 - Navigation and protected routing
- Context API - Global state (`AuthContext` and `EventContext`)
- Formik - Form state and submission
- Yup - Client-side validation
- Boostrap 5 - Styling and layout

# Getting Started

1. Prerequisites
   Ensure you have Node.js installed.

2. Installation

```
# clone the repository
git clone https://github.com

# navigate into the project folder
cd capstone-project

#install dependencies
npm install
```

3. Setup Boostrap
   In your `src/index.js` or `src/main.jsx`, ensure you have imported the Bootstrap CSS:

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

4. Run the App

```
npm start
# The app will open at http://localhost:5173
```

5. Folder Structure
   src/
   - components/ # Reusable UI (Header, EventCard)
   - context/ # Global State (AuthContext, EventContext)
   - routes/ # Page views (Dashboard, AddEventForm, Help, etc.)
   - App.jsx # Router configuration and Providers
   - index.jsx # Entry point

6. Usage

- **Register/Login:** Start by creating an account. The app uses `localStorage` to simulate a database.
- **Dashboard:** Once you are logged in, you are redirected to your private dashboard.
- **Create Event:** Navigate to "Add Event" to populate your schedule.
- **Edit/Delete:** Use buttons on the `EventCard` to manage your entries.
- **Help:** If you get stuck, visit the help page for tips on organizing your schedule.

<!--References-->

<!--GitHub Docs - About the respository README file - https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes-->
