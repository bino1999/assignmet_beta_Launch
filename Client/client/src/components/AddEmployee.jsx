import axios from "axios";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { setEmployeeList } from "../Redux/EmployeeReducer";
import * as Yup from "yup";

export default function AddEmployee() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full Name is required"),
    nameWithInitials: Yup.string().required("Name with Initials is required"),
    displayName: Yup.string().required("Display Name is required"),
    gender: Yup.string().required("Gender is required"),
    dateOfBirth: Yup.date().required("Date of Birth is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .matches(/^\d+$/, "Invalid mobile number")
      .required("Mobile is required"),
    designation: Yup.string().required("Designation is required"),
    eType: Yup.string().required("Employee Type is required"),
    joinDate: Yup.date().required("Join Date is required"),
    experience: Yup.string().required("Experience is required"),
    salary: Yup.string().required("Salary is required"),
    personalNotes: Yup.string().required("Personal Notes is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          fullName: "",
          nameWithInitials: "",
          displayName: "",
          gender: "",
          dateOfBirth: "",
          email: "",
          mobile: "",
          designation: "",
          eType: "",
          joinDate: "",
          experience: "",
          salary: "",
          personalNotes: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          axios
            .post("http://localhost:5000/employee/addEmployee", values)
            .then((response) => {
              console.log("Data submitted successfully:", response.data);
              dispatch(setEmployeeList(response.data));
            })
            .catch((error) => {
              console.error("Error submitting data:", error);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <>
            <div className="container">
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Full Name:
                        <input
                          className="form-control"
                          type="text"
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Name with Initials:
                        <input
                          className="form-control"
                          type="text"
                          name="nameWithInitials"
                          value={values.nameWithInitials}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Display Name:
                        <input
                          className="form-control"
                          type="text"
                          name="displayName"
                          value={values.displayName}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Gender:
                        <input
                          className="form-control"
                          type="text"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Date of Birth:
                        <input
                          className="form-control"
                          type="date"
                          name="dateOfBirth"
                          value={values.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Email:
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Mobile:
                        <input
                          className="form-control"
                          type="text"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Designation:
                        <input
                          className="form-control"
                          type="text"
                          name="designation"
                          value={values.designation}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Employee Type:
                        <select
                          name="eType"
                          value={values.eType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Type</option>
                          <option value="Full-time">Full time</option>
                          <option value="Part-time">Part time</option>
                          <option value="Contract Basis">Contract Basis</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Join Date:
                        <input
                          className="form-control"
                          type="date"
                          name="joinDate"
                          value={values.joinDate}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Experience:
                        <input
                          className="form-control"
                          type="text"
                          name="experience"
                          value={values.experience}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        Salary:
                        <input
                          className="form-control"
                          type="text"
                          name="salary"
                          value={values.salary}
                          onChange={handleChange}
                          required
                        />
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label">
                        personal Notes:
                        <textarea
                          className="form-control"
                          type="text"
                          name="personalNotes"
                          value={values.personalNotes}
                          onChange={handleChange}
                          required
                        />
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Submit
                        </button>
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}
