import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "./reducer";

import "./App.css";

function AddStudent({ addStudent }) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addStudent({ ...value });
    dispatch(addUser({ ...value, ...e.target.value }));

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="rollNo"
        className="input"
        placeholder="rollno"
        value={value.rollno}
        onChange={(e) => setValue({ ...value, rollno: e.target.value })}
      />
      <input
        type="text"
        name="name"
        className="input"
        placeholder="name"
        value={value.Name}
        onChange={(e) => setValue({ ...value, name: e.target.value })}
      />
      <input
        type="text"
        name="DOB"
        className="input"
        placeholder="DOB"
        value={value.DOB}
        onChange={(e) => setValue({ ...value, DOB: e.target.value })}
      />
      <input
        type="text"
        name="class"
        className="input"
        placeholder="class"
        value={value.class}
        onChange={(e) => setValue({ ...value, class: e.target.value })}
      />
      <input type="reset" className="input-btn" defaultValue="Reset" />
      <button type="submit" className="input-btn">
        Add
      </button>
    </form>
  );
}

export default AddStudent;
