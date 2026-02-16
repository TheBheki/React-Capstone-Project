import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Event Planner
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* These links show only if a user is logged in */}
            {user && (
              <>
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/add-event">
                  Add Event
                </Nav.Link>
              </>
            )}
            {/* Help is always visible */}
            <Nav.Link as={Link} to="/help">
              Help
            </Nav.Link>
          </Nav>

          <Nav>
            {user ? (
              <div className="d-flex align-items-center">
                <span className="text-light me-3">Hi, {user.username}</span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
