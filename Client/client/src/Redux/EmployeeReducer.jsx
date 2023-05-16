import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeList: [],
};

export const userSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeList: (state, action) => {
      return { ...state, employeeList: action.payload };
    },
   
    getAllEmployees: (state, action) => state.employeeList,
    
    deleteEmployee: (state, action) => {
      state.employeeList = state.employeeList.filter(
        (employee) => employee._id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      state.employeeList = state.employeeList.map((employee) =>
        employee._id === action.payload._id ? action.payload : employee
      );
    },
  },
});

export const { setEmployeeList, addEmployee, deleteEmployee, updateEmployee } =
  userSlice.actions;

export default userSlice.reducer;
