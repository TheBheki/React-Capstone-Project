import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Context Providers
import { AuthProvider, useAuth } from "./context/AuthContext";
import { EventProvider } from "./context/EventContext";

// Components
import Header from "./components/Header";
import RegistrationForm from "./routes/RegistrationForm";
import LoginForm from "./routes/LoginForm";
import Dashboard from "./routes/Dashboard";
import AddEventForm from "./routes/AddEventForm";
import Help from "./routes/Help";
import EditEventForm from "./routes/EditEventForm";

// A protected route component to ensure only logged-in users see certain pages.
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate replace to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <Router>
          <Header />

          <main style={{ marginTop: "80px" }}>
            {" "}
            <Routes>
              {/* Public Routes */}
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/help" element={<Help />} />

              {/* Private Routes (Require Login) */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/add-event"
                element={
                  <PrivateRoute>
                    <AddEventForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit-event/:id"
                element={
                  <PrivateRoute>
                    <EditEventForm />
                  </PrivateRoute>
                }
              />

              {/* Default Redirect */}
              <Route path="/" element={<Navigate replace to="/login" />} />
            </Routes>
          </main>
        </Router>
      </EventProvider>
    </AuthProvider>
  );
}

export default App;

// References

// Youtube Video - Studytonight with Abhishek - Private and Protected Routes in React (using React Router v6) (Posted on 25 January 2025) - https://www.youtube.com/watch?v=9RfaG0IzccE
