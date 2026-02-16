import { Formik, Form, Field, ErrorMessage, replace } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    username: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values) => {
    console.log("User account created", values);
    navigate("./Login");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <Field name="username" type="text" />
          <ErrorMessage
            name="username"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            style={{ color: "red" }}
          />
        </div>

        <button type="submit">Create Account</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;

// References

// Formik docs tutorial page (2020) Retrived on 08 February 2026 - https://formik.org/docs/tutorial

// Youtube tutorial - Zarx Biz - Mastering React Formik Registration Forms Like a PRO in 2025 | Easiest way (18 April 2024) -
// Retrived on 08 February 2026 - https://www.youtube.com/watch?v=ZGV4I5pVhwM
