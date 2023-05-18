import { useFormik } from "formik";
import * as Yup from "yup";
import "./RegistrationSection.scss";
import { registerCustomer } from "../../service/customer.service";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RgisterField = () => {
  // navigate
  const navigate = useNavigate();

  // onSubmit function
  const onSubmit = async (values: any, actions: any) => {
    try {
      const res = await registerCustomer(values);
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
      //navigate("/verify-account");
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

  //phone number validation
  const phoneRegex = /^(?:\+?233|0)[2-9]\d{8}$/;

  // create the validation schema for sign in
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valid email").required("Email required"),
    password: Yup.string()
      .required("Password required")
      .min(8, "Incorrect password"),
    fullName: Yup.string().min(4).required("full name required"),
    phone: Yup.string()
      .matches(phoneRegex, "Please enter a valid Ghana phone number")
      .required("Phone required"),
  });

  const { handleSubmit, handleChange, values, errors, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        fullName: "",
        phone: "",
      },
      validationSchema: SignUpSchema,
      onSubmit,
    });

  return (
    <div>
      <ToastContainer />
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <input
            type="fullName"
            name="fullName"
            id="fullName"
            className={`form-control form__input mb-2 ${
              errors.fullName && touched.fullName ? "input-error" : ""
            }`}
            placeholder="full name"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            {errors.fullName && touched.fullName && (
              <span className="error">{errors.fullName}</span>
            )}
          </div>
          <input
            type="number"
            name="phone"
            id="phone"
            className={`form-control form__input mb-2 ${
              errors.phone && touched.phone ? "input-error" : ""
            }`}
            placeholder="phone number"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div>
            {errors.phone && touched.phone && (
              <span className="error">{errors.phone}</span>
            )}
          </div>

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
          Register
        </button>
      </form>
    </div>
  );
};

export default RgisterField;
