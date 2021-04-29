/**
 * AddEditPartner
 */
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

//action from reducer
import { addUser } from "./reducer";

import "./App.css";

function AddStudent() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    //dispatch the action and values to be filled to reducer
    dispatch(addUser({ ...value }));
    setValue("");
  };

  const getInput = (data) => {
    //common input tag
    return (
      <input
        type="text"
        name={data.name}
        className="input"
        placeholder={data.name}
        onChange={(e) => onInputChange(data.name, e.target.value)}
      />
    );
  };

  //to reset the input field
  const myFormRef = useRef();
  const clearForm = () => {
    myFormRef.current.reset();
  };

  //should handle the inputfield when clicked
  const onInputChange = (type, inputValue) => {
    const data = { ...value };
    data[type] = inputValue;
    setValue(data);
  };

  return (
    <form id="create-input-form" ref={myFormRef} onSubmit={handleSubmit}>
      {/* calls the input tag  */}
      {getInput({ name: "rollno" })}
      {getInput({ name: "name" })}
      {getInput({ name: "DOB" })}
      {getInput({ name: "class" })}
      <button
        type="reset"
        className="input-btn"
        onClick={clearForm}
        defaultValue="Reset"
      >
        Reset
      </button>
      <button type="submit" className="input-btn">
        Add
      </button>
    </form>
  );
}

export default AddStudent;
