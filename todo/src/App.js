
import './index.css';
import TodoRow from './components/Todorow';
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900">
      <div className="container border  w-10/12 sm:w-11/12 border-stone-950  bg-dk-violet">
        <div className="text-4xl text-center font-bold mb-4 mt-6 text-pl-white">Todo List</div>
        
        <div className="inline justify-center items-start text-vb-cyan w-10/12 sm:w-11/12">
          {todos.map((todo, index) => (
            <TodoRow key={index} label={todo} onDelete={() => handleDeleteTodo(index)} />
          ))}
        </div>
  
        <div className="flex justify-center mb-6 mt-4 ">
          <input
            type="text"
            className="border rounded-lg mr-2 p-2 shadow-xl"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='add task here...'
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2" onClick={handleAddTodo}>
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

