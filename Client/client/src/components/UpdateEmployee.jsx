import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeList } from "../Redux/EmployeeReducer";
import { useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [employee, setEmployee] = useState({});
  const [displayName, setDisplayName] = useState("");
  const [designation, setDesignation] = useState("");
  const [eType, setEType] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/employee/getSingleEmployee/${id}`)
      .then((response) => {
        console.log(response.data);
        const employeeData = response.data;
        setEmployee(employeeData);
        setDisplayName(employeeData.displayName);
        setDesignation(employeeData.designation);
        setEType(employeeData.eType);
        setExperience(employeeData.experience);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleUpdate = () => {
    const updatedEmployee = {
      ...employee,
      displayName,
      designation,
      eType,
      experience,
    };

    axios
      .put(
        `http://localhost:5000/employee/updateEmployee/${id}`,
        updatedEmployee
      )
      .then((response) => {
        dispatch(setEmployeeList(response.data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Update Employee</h2>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Designation:</label>
          <input
            type="text"
            className="form-control"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Employee Type:</label>
          <input
            type="text"
            className="form-control"
            value={eType}
            onChange={(e) => setEType(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Experience:</label>
          <input
            type="text"
            className="form-control"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}
