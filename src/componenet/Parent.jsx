import React from 'react'
import { useState } from 'react'
import Child from './Child.jsx'

const Parent = () => {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputText.trim() !== '') {
        setTodos([...todos, inputText]);
        setInputText('');
      }
    };
  
    const handleDeleteTodo = (index) => {
      const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
      setTodos(newTodos);
    };
  
    return (
      <div>
        <div>
          <input type="text" value={inputText} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Simpan</button>
        </div>
        <Child todos={todos} handleDeleteTodo={handleDeleteTodo} />
      </div>
  )
}

export default Parent