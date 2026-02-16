import { Container, Accordion, Card, ListGroup, Alert } from "react-bootstrap";

const Help = () => {
  return (
    <Container className="my-5 pt-4">
      <header className="mb-5 text-center">
        <h1 className="display-5 fw-bold text-primary">
          Help & Support Center
        </h1>
        <p className="lead">
          Master your schedule with the step-by-step guide.
        </p>
      </header>

      {/* App Navigation Guide */}
      <section className="mb-5">
        <h3 className="mb-3"> Getting Started</h3>
        <Accordion defaultActiveKey="0 shadow-sm">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to Register an Account</Accordion.Header>
            <Accordion.Body>
              Navigate to the <strong>Register</strong> page from the top menu.
              Fill in your name, email, username, and a strong password. Our
              system will validate your email format automatically!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accessing your Dashboard</Accordion.Header>
            <Accordion.Body>
              Once logged in, click <strong>Dashboard</strong> in the navigation
              bar. This is your central hub where all your upcoming events are
              displayed chronologically.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Managing Events (Add, Edit, Delete)
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <strong>Add:</strong> Click "Add Event" in the header and fill
                  out the details.
                </li>
                <li>
                  <strong>Edit:</strong> Use the "Edit" button on any event card
                  in your dashboard.
                </li>
                <li>
                  <strong>Delete:</strong> Click the red "Delete" button to
                  remove an event permanently. Changes update instantly!
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>

      <section className="mb-5">
        <h3 className="mb-3 text-success">
          💡 Tips for Organizing Events Effectively
        </h3>
        <Card className="border-success shadow-sm">
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong> Set Clear Objectives:</strong> Before adding an event,
                define its purpose to ensure you allocate the right amount of
                time.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Detail the Location:</strong> Always include specific
                room numbers or virtual links in the location field to avoid
                last-minute stress.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Use Descriptions Wisely:</strong> Use the description
                box to list items you need to bring or specific agendas for
                meetings.
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Buffer Time:</strong> Don't book events back-to-back.
                Leave 10-15 minutes between events for travel or mental reset.
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </section>

      <Alert variant="info" className="text-center">
        Need more help? Contact our support team at{"+01 23 456 7890 "}
        <strong>support@myevent.co.za</strong>
      </Alert>
    </Container>
  );
};

export default Help;
