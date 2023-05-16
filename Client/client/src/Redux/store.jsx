import { configureStore } from "@reduxjs/toolkit";


import employeeReducer from "./EmployeeReducer";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
   
  },
});
