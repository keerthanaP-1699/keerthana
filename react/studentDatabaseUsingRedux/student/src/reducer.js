/**
 * AddEditPartner
 */
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
  //reducer with action and state
  reducers: {
    //add the student
    addUser: (state, action) => {
      state.students = [...state.students, action.payload];
    },
    //update the studentlist
    editUser: (state, action) => {
      state.students[action.payload.id] = action.payload;
    },
    //delete the student
    deleteUser: (state, action) => {
      state.students = state.students.filter((val,id) => { 
        return (get(action.payload,id, ""));
      });
    },
  },
});

const { actions, reducer } = studentSlice;

export const { addUser, deleteUser, editUser } = actions;
export const studentReducer = reducer;
