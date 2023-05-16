import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmployeeList, deleteEmployee } from "../Redux/EmployeeReducer";
import { Link } from "react-router-dom";

export default function ViewEmployees() {
  const [list, setList] = useState([]);
  const [selectedEmployeeType, setSelectedEmployeType] = useState("All"); // Default: All types
  const dispatch = useDispatch();

  const employeeList = useSelector((state) => state.employee.employeeList);

  useEffect(() => {
    axios
      .get("http://localhost:5000/employee/getAllEmployees")
      .then((response) => dispatch(setEmployeeList(response.data)))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setList(employeeList);
  }, [employeeList]);

  const empTypeChangeing = (event) => {
    setSelectedEmployeType(event.target.value);
  };

  const filteredEmpList =
    selectedEmployeeType === "All"
      ? list
      : list.filter((item) => item.eType === selectedEmployeeType);

  return (
    <div>
      <button className="btn btn-primary">
        <Link to="/add" style={{ color: "white" }}>
          Add People
        </Link>
      </button>
      <div className="my-3">
        Filter by Employee Type:
        <select
          className="form-select"
          value={selectedEmployeeType}
          onChange={empTypeChangeing}
        >
          <option value="All">All</option>
          <option value="Full-time">Full time</option>
          <option value="Part-time">Part time</option>
          <option value="Contract Basis">Contract Basis</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Emp ID</th>
            <th>Designation</th>
            <th>Emp Type</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmpList.map((item, index) => {
            return (
              <tr key={item._id || index}>
                <td>{item.displayName}</td>
                <td>{index + 1}</td>
                <td>{item.designation}</td>
                <td>{item.eType}</td>
                <td>{item.experience}</td>
                <td>
                  <button className="btn btn-primary" style={{ margin: "3px" }}>
                    <Link
                      to={`viewSingleEmployee/${item._id}`}
                      style={{ color: "white" }}
                    >
                      View
                    </Link>
                  </button>

                  <button
                    style={{ margin: "3px" }}
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteEmployee(item._id))}
                  >
                    Delete
                  </button>

                  <button style={{ margin: "3px" }} className="btn btn-info">
                    <Link
                      to={`/updateEmployee/${item._id}`}
                      style={{ color: "white" }}
                    >
                      Update
                    </Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
