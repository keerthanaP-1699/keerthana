/**
 * react is used to tell the complier that we are using JSX form
 * useState is used to create a state in function Component
 */
import React, { useState } from "react";

//to make the textbox filled with previous values we use get
import get from "lodash/get";

//user constructed files
import AuthButton from "./AuthBtn";
import TodoForm from "./TodoForm";

//style for TodoList
import "../styles/TodoList.css";

/**
 * we create a component Todolist that contains add,edit,delete and complete functions
 * todoEditing will contain the index where the edit option is clicked ad is set by setTodoEditing
 * editingText will contain the edited text and is set by setEditingText
 * todos will store the values in array of object
 * a default value is set to the todos
 */

function Todolist() {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
  ]);

  /**
   * addTodo will add the text from todolist
   */
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  /**
   * completeTodo will make the text with style of line-through.
   * it is find by the index value
   */
  const completeTodo = (index) => {
    [...todos][index].isCompleted = true;
    setTodos([...todos]);
  };

  /**
   * removeTodo will clear the text that we dont need
   * splice operator is used to remove the text from the array using the array index
   */
  const removeTodo = (index) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  };

  /**
   * when the edit option is clicked the text box comes with the text already filled
   * and submit button appears when editing is done the list get updated
   */
  const submitEdits = (id) => {
    [...todos][id].text = editingText;
    setTodos([...todos]);
    setTodoEditing(null);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>Todo List</h1>

        {/* todos.map will check the condition whether the index matches the todoEditing 
        if matched edit option appears and value stored in editingText 
        and if text is mark complete it makes the text line through*/}

        {todos.map((todo, index) => (
          <div className="todo">
            {index === todoEditing ? (
              <input
                type="text"
                defaultValue={get(todos, `[${index}].text`, null)}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "",
                }}
              >
                {todo.text}
              </div>
            )}

            {/* index and todoEditing should not match and text should be marked as not completed it is stored in disabled.
            if index and todoEditing matches the edit option will enable else it wll be disable */}

            <div className="todo-actions">
              <button
                disabled={index !== todoEditing && todo.isCompleted}
                onClick={() =>
                  index === todoEditing
                    ? submitEdits(index)
                    : setTodoEditing(index)
                }
              >
                {index === todoEditing ? "submit Edits" : "Edit"}
              </button>
              {/* complete button when clicked it goes to the completeTodo function
              x button when clicked it goes to the removeTodo function */}
              <button onClick={() => completeTodo(index)}>Complete</button>
              <button onClick={() => removeTodo(index)}>x</button>
            </div>
          </div>
        ))}
        {/* when TodoForm called the text entered is added to the setValues state  */}
        <TodoForm addTodo={addTodo} />
      </div>
      
      {/* AuthButton will check whether a token is stored in localstorage
       if it is true then it will get a logout button 
       when false it shows you where not logged in  */}
       
      <AuthButton />
    </div>
  );
}

export default Todolist;
