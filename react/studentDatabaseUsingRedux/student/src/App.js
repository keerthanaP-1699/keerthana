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
  const [indexToEdit, setIndexToEdit] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [checkindex, setCheckIndex] = useState("");

  const headers = ['checkbox','Rollno','Name','DOB','Class','Action'];
  const editedValKey=["rollno","name","DOB","class"];

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
    setIndexToEdit(null);
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
              {headers.map((item,index) => (<th key={index}>{item}</th>))}
            </tr>
          </thead>
          {studentList.map((student, index) => (
            
            <>
              {index === indexToEdit ? (
                <div>
                  {getEditInput({ name: "rollno", index: indexToEdit })}
                  {getEditInput({ name: "name", index: indexToEdit })}
                  {getEditInput({ name: "DOB", index: indexToEdit })}
                  {getEditInput({ name: "class", index: indexToEdit })}
                  <button
                    className="output-btn"
                    onClick={() => submitEdits(index)}
                  >
                    submit Edits
                  </button>
                </div>
              ) : (
                <tr>
                  <input
                    type="checkbox"
                    value={index}
                    onChange={(e) => setCheckIndex(e.target.value)}
                  />

                  {editedValKey.map((items, index) => (<td key={index}>{student[items]}</td>))}

                  <button
                    className="output-btn"
                    onClick={() => setIndexToEdit(index)}
                  >
                    Edit
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
