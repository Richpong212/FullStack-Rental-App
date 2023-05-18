import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegistrationSection.scss";
import { loginCustomer } from "../../service/customer.service";
import { useDispatch } from "react-redux";
import { login } from "../../redux/Slice/customerSlice";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginField = () => {
  // dispatch
  const dispatch = useDispatch();

  // navigate
  const navigate = useNavigate();

  // onSubmit function
  const onSubmit = async (values: any, actions: any) => {
    try {
      const res = await loginCustomer(values);
      const { token, user } = res;

      // dispatch the action to store the token and user in the redux store
      dispatch(login({ token, user }));
      toast.success(`${res.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      actions.resetForm();
      navigate("/");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };
  // create the validation schema for sign in
  const SignInSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email required"),
    password: Yup.string()
      .required("Password required")
      .min(8, "Incorrect password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=|{}[\]:";'<>,.?/~`]).{8,}$/,
        "Incorrect password"
      ),
  });

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: SignInSchema,
      onSubmit,
    });

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control form__input mb-2 ${
              errors.email && touched.email ? "input-error" : ""
            }`}
            placeholder="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            {errors.email && touched.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <input
            type="password"
            name="password"
            id="password"
            className={`form-control form__input mb-2 ${
              errors.password && touched.password ? "input-error" : ""
            }`}
            placeholder="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            {errors.password && touched.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
        </div>
        <button type="submit" className="btn globalbuttonstyles">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginField;
