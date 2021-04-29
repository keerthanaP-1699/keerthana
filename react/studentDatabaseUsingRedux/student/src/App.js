/**
 * AddEditPartner
 */
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import get from "lodash/get";

import "./App.css";

import AddStudent from "./AddStudent";
import { deleteUser, editUser } from "./reducer";

const App = ({ studentList }) => {
  const dispatch = useDispatch();
  const [studentEdit, setStudentEdit] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [checkindex, setCheckIndex] = useState("");

  //should handle delete 
  const removeStudent = () => {
    if (window.confirm(`Are you sure you wish to this delete item?`)) {
      dispatch(deleteUser({ ...checkindex }));
    }
    setCheckIndex(null);
  };

  //should handle updates
  const submitEdits = (id) => {
    dispatch(editUser({ ...editingText, id }));
    setStudentEdit(null);
  };

  //common input tag for editing
  const getEditInput = (data) => {
    return (
      <input
        type="text"
        defaultValue={get(studentList, `[${data.index}].${data.name}`, null)}
        value={editingText[data.name]}
        onChange={(e) => onEditChange(data.name, e.target.value)}
      />
    );
  };

  //should handle updated
  const onEditChange = (type, inputValue) => {
    const data = { ...editingText };
    data[type] = inputValue;
    setEditingText(data);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>student database</h1>
        <table className="student">
          <thead>
            <tr>
              <td>checkbox</td>
              <td>rollNo</td>
              <td>Name</td>
              <td>DOB</td>
              <td>Class</td>
              <td>Action</td>
            </tr>
          </thead>
          {studentList.map((student, index) => (
            <>
              {index === studentEdit ? (
                <div>
                  {getEditInput({ name: "rollno", index: studentEdit })}
                  {getEditInput({ name: "name", index: studentEdit })}
                  {getEditInput({ name: "DOB", index: studentEdit })}
                  {getEditInput({ name: "class", index: studentEdit })}
                  <button
                    className="output-btn"
                    onClick={() =>
                      index === studentEdit
                        ? submitEdits(index)
                        : setStudentEdit(index)
                    }
                  >
                    {index === studentEdit ? "submit Edits" : "Edit"}
                  </button>
                </div>
              ) : (
                <tr>
                  <input
                    type="checkbox"
                    value={index}
                    onChange={(e) => setCheckIndex(e.target.value)}
                  />

                  <td>{student.rollno}</td>
                  <td>{student.name}</td>
                  <td>{student.DOB}</td>
                  <td>{student.class}</td>

                  <button
                    className="output-btn"
                    onClick={() =>
                      index === studentEdit
                        ? submitEdits(index)
                        : setStudentEdit(index)
                    }
                  >
                    {index === studentEdit ? "submit Edits" : "Edit"}
                  </button>
                </tr>
              )}
            </>
          ))}
        </table>

         <AddStudent />
        <button className="input-btn" onClick={() => removeStudent()}>
          Delete
        </button>
      </div>
    </div>
  );
};

//get value from store
const mapStateToProps = (state) => {
  return { studentList: state.students };
};
export default connect(mapStateToProps)(App);
