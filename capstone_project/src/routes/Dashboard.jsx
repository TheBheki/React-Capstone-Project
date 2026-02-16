import { useEvents } from "../context/EventContext";
import EventCard from "../components/EventCard";

const Dashboard = () => {
  const { events, deleteEvent } = useEvents();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Upcoming Events</h2>
        <span className="badge bg-primary">{events.length} Total Events</span>
      </div>

      {events.length === 0 ? (
        <div className="text-center p-5 border rounded bg-light">
          <p>No events scheduled. Time to add one!</p>
        </div>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div key={event.id} className="col-md-4 mb-4">
              <EventCard event={event} onDelete={() => deleteEvent(event.id)} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
