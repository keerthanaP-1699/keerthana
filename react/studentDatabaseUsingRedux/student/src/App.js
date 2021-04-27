import React, { useState } from "react";
import { useDispatch } from "react-redux";
import get from "lodash/get";

import "./App.css";

import AddStudent from "./AddStudent";
import { deleteUser, editUser } from "./reducer";

const App = () => {
  const dispatch = useDispatch();
  const [studentEdit, setStudentEdit] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [checkindex, setCheckIndex] = useState("");
  const [studentList, setStudentList] = useState([
    {
      rollno: 123,
      name: "keerthana",
      DOB: "16-11-1999",
      class: "X-A",
    },
  ]);
  const addStudent = (text) => {
    setStudentList([...studentList, { ...text }]);
  };

  const removeStudent = () => {
    if (
      window.confirm(
        `Are you sure you wish to ${checkindex.length} delete item?`
      )
    ) {
      const deleteitems = studentList.filter((val, id) => {
        return get(checkindex, id);
      });
      setStudentList(deleteitems);
      dispatch(deleteUser({ ...checkindex }));
    }

    setCheckIndex(null);
  };

  const submitEdits = (id) => {
    [...studentList][id].rollno = editingText.rollno;
    [...studentList][id].name = editingText.name;
    [...studentList][id].DOB = editingText.DOB;
    [...studentList][id].class = editingText.class;
    setStudentList([...studentList]);
    dispatch(editUser({ ...editingText, id }));

    setStudentEdit(null);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>student database</h1>
        <table>
          {studentList.map((student, index) => (
            <div className="student">
              {index === studentEdit ? (
                <div>
                  <input
                    type="text"
                    defaultValue={get(studentList, `[${index}].rollno`, null)}
                    value={editingText.rollno}
                    onChange={(e) =>
                      setEditingText({ ...editingText, rollno: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    defaultValue={get(studentList, `[${index}].name`, null)}
                    value={editingText.name}
                    onChange={(e) =>
                      setEditingText({ ...editingText, name: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    defaultValue={get(studentList, `[${index}].DOB`, null)}
                    value={editingText.DOB}
                    onChange={(e) =>
                      setEditingText({ ...editingText, DOB: e.target.value })
                    }
                  />

                  <input
                    type="text"
                    defaultValue={get(studentList, `[${index}].class`, null)}
                    value={editingText.class}
                    onChange={(e) =>
                      setEditingText({ ...editingText, class: e.target.value })
                    }
                  />
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
                <div>
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
                </div>
              )}
            </div>
          ))}
        </table>
        <AddStudent addStudent={addStudent} />
        <button className="input-btn" onClick={() => removeStudent()}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default App;
