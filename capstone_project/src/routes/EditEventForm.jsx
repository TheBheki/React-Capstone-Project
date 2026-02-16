import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEvents } from "../context/EventContext";

const EditEventForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, updateEvent } = useEvents();

  // Find the existing event data
  const existingEvent = events.find((e) => e.id === parseInt(id));

  const formik = useFormik({
    initialValues: existingEvent || {
      name: "",
      date: "",
      time: "",
      location: "",
      description: "",
    },
    // Update initial value with state reset.
    // Crucial for loading data after mount.
    enableReinitialize: true,
    onSubmit: (values) => {
      updateEvent(parseInt(id), values);
      navigate("/dashboard");
    },
  });

  // If there is no event found,
  // Output a message letting the user know that the event is not found.
  if (!existingEvent) return <p>Event not found.</p>;

  // If an event is found,
  // Allow the user to access the fields they would like to make changes on.
  return (
    <div className="container mt-5">
      <h2>Edit Event</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="form-control mb-3"
          {...formik.getFieldProps("name")}
        />
        <input
          className="form-control mb-3"
          {...formik.getFieldProps("date")}
        />
        <input
          className="form-control mb-3"
          {...formik.getFieldProps("time")}
        />
        <input
          className="form-control mb-3"
          {...formik.getFieldProps("location")}
        />
        <input
          className="form-control mb-3"
          {...formik.getFieldProps("description")}
        />

        {/*Button to save any changes made */}
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default EditEventForm;

// References

// Stack Overflow Questions - Updating one of the Formik initial values with state resets all other values (Asked on 25 February 2021) - https://stackoverflow.com/questions/66372097/updating-one-of-the-formik-initial-values-with-state-resets-all-other-values
