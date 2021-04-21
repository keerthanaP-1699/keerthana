import React,{useState} from "react";
import "./todo.css"
import TodoForm from "./TodoForm";
import get from "lodash/get";
import { useHistory } from "react-router-dom";


function Todolist() {
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
  ]);
  const history= useHistory();
  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const completeTodo = (index) => {
    [...todos][index].isCompleted = true;
    setTodos([...todos]);
  };

  const removeTodo = (index) => {
    if (window.confirm('Are you sure you wish to delete this item?')) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);  
      setTodos(newTodos);
    }
  }

  const submitEdits = (id) => {
    [...todos][id].text = editingText
    setTodos([...todos]);
    setTodoEditing(null);
  }
  
  return (
    <div className = "app">
      <div className = "todo-list">
        <h1>Todo List</h1>
          {todos.map((todo, index) => (
          <div className = "todo"> 
            {(index === todoEditing)  ? (
            <input
              type = "text"
              defaultValue={get(todos,`[${index}].text`,null)}
              onChange = {(e) => setEditingText(e.target.value)}
            /> 
            ) : (
            <div style = {{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}</div>
            )}

            <div className="todo-actions"> 
              <button disabled = {index !== todoEditing && todo.isCompleted} onClick = {()=> (index === todoEditing)?submitEdits(index) : setTodoEditing(index) }>{index === todoEditing? 'submit Edits' : 'Edit'}</button>
              <button onClick = {() => completeTodo(index)}>Complete</button>
              <button onClick = {() => removeTodo(index)}>x</button>
            </div>
         </div> 
        ))}
        <TodoForm addTodo = {addTodo}/>
      </div>
      
      <div>
      <button className='logout' onClick={()=> history.push('/login')}>logout</button>
      </div>
    </div>  
  );
}

export default Todolist;
