import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Username too short").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login({ username: values.username });
      navigate("/dashboard");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-4 border rounded shadow-sm bg-light"
    >
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Username"
          {...formik.getFieldProps("username")}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="text-danger">{formik.errors.username}</div>
        )}
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          type="password"
          placeholder="Password"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-danger">{formik.errors.password}</div>
        )}
      </div>

      <button type="submit" className="btn btn-danger w-100">
        Login
      </button>
    </form>
  );
};
export default LoginForm;
