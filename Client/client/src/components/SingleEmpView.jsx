import axios from 'axios'
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";


export default function SingleEmpView() {
const [employee , setEmployee] = useState({})
const { id } = useParams();
console.log(id)

useEffect(()=>{
 axios
   .get(`http://localhost:5000/employee/getSingleEmployee/${id}`)
   .then((response) => {
     console.log(response.data);
     setEmployee(response.data);
   })
   .catch((error) => {
     console.log(error);
   });
},[])

  return (
    <div>
      <div>
        <div className="card">
          <div className="card-header card-title">{employee.fullName}</div>
          <div className="card-body" style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <p className="card-text">Display Name: {employee.displayName}</p>
              <p className="card-text">Gender: {employee.gender}</p>
              <p className="card-text">Email: {employee.email}</p>
              <p className="card-text">Mobile Number: {employee.mobile}</p>
              <p className="card-text">DateOfBirth: {employee.dateOfBirth}</p>
              <p className="card-text">Designation: {employee.designation}</p>
            </div>

            <div style={{ flex: 1 }}>
              <p className="card-text">Employee Type: {employee.eType}</p>
              <p className="card-text">JoinDate: {employee.joinDate}</p>
              <p className="card-text">Experience: {employee.experience}</p>
              <p className="card-text">Salary: {employee.salary}</p>
              <p className="card-text">
                {" "}
                PersonalNotes: {employee.personalNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//  fullName: "",
//           nameWithInitials: "",
//           displayName: "",
//           gender: "",
//           dateOfBirth: "",
//           email: "",
//           mobile: "",
//           designation: "",
//           eType: "",
//           joinDate: "",
//           experience: "",
//           salary: "",
//           personalNotes: "
