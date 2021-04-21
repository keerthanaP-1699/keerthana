import React, {useState} from "react";

/**
 * uses a state to store the text that are added
 * e.preventDefault will prevent the page from refreshing
 * if no text is entered and we press enter there will be no change (!value = false)will not get added
 */
function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
    
    /**
     * onChange will add the text to the setValues and is store in values state
     */
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    );
  }
export default TodoForm;