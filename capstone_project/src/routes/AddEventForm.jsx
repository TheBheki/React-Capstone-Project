import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventContext";

const AddEventForm = () => {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      description: "",
      location: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Event name is required"),
      date: Yup.date().required("Date is required"),
      time: Yup.string().required("Time is required"),
      description: Yup.string().max(
        200,
        "Description should be under 200 characters",
      ),
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: (values) => {
      addEvent(values);

      // Redirect back to the dashboard to see the new event.
      navigate("/dashboard");
    },
  });

  return (
    <div className="container mt-5 pt-5">
      {" "}
      <h2 className="mb-4">Create New Event</h2>
      <form
        onSubmit={formik.handleSubmit}
        className="shadow p-4 rounded bg-light"
      >
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            className={`form-control ${formik.touched.name && formik.errors.name ? "is-invalid" : ""}`}
            type="text"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="invalid-feedback">{formik.errors.name}</div>
          )}
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input
              className={`form-control ${formik.touched.date && formik.errors.date ? "is-invalid" : ""}`}
              type="date"
              {...formik.getFieldProps("date")}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <input
              className={`form-control ${formik.touched.time && formik.errors.time ? "is-invalid" : ""}`}
              type="time"
              {...formik.getFieldProps("time")}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            className={`form-control ${formik.touched.location && formik.errors.location ? "is-invalid" : ""}`}
            type="text"
            {...formik.getFieldProps("location")}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            rows="3"
            {...formik.getFieldProps("description")}
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Add to Schedule
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
