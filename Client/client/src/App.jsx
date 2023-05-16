import { Route, Routes } from "react-router-dom";
import ViewEmployees from "./components/ViewEmployees";
import AddEmployee from "./components/AddEmployee";
import SingleEmpView from "./components/SingleEmpView";
import UpdateEmployee from "./components/UpdateEmployee";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/view" element={<ViewEmployees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="view/viewSingleEmployee/:id" element={<SingleEmpView />} />
        <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
