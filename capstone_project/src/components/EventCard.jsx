import { Link } from "react-router-dom";

const EventCard = ({ event, onDelete }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-danger mb-3">{event.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Date: {event.date} | Time: {event.time}
        </h6>
        <p className="card-text">{event.description}</p>
        <p className="small text-secondary">
          <strong>Location:</strong> {event.location}
        </p>
      </div>
      <div className="card-footer bg-transparent border-top-0 pb-3">
        <Link
          to={`/edit-event/${event.id}`}
          className="btn btn-outline-primary btn-sm w-100 mb-2"
        >
          Edit
        </Link>
        <button
          className="btn btn-outline-danger btn-sm w-100"
          onClick={onDelete}
        >
          Delete Event
        </button>
      </div>
    </div>
  );
};

export default EventCard;

// References

// Youtube Video - Bro Code - React CARD components (Posted on 13 October 2023) - https://www.youtube.com/watch?v=yYiwxYqQ9vg
