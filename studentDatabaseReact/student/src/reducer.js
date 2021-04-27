import { createSlice } from "@reduxjs/toolkit";
import get from "lodash/get";

const studentSlice = createSlice({
  name: "students",
  initialState: { students: [   
    {
      rollno:123,
      name:"keerthana",
      DOB:"16-11-1999",
      class:"X-A",
    },
  ]},
  reducers: {
    addUser: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    editUser: (state, action) => {
      state.students[action.payload.id] = action.payload;
    },
    deleteUser: (state, action) => {
      state.students = state.students.filter((val,id) => { 
        return (get(action.payload,id));
      });
    },
  },
});

const { actions, reducer } = studentSlice;

export const { addUser, deleteUser, editUser } = actions;
export const studentReducer = reducer;
