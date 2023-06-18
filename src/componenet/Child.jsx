import React from 'react'


const Child = ({ todos, handleDeleteTodo }) => {
  return (
    <div>
    {todos && todos.map((todo, index) => (
      <div key={index}>
        {todo}
        <button onClick={() => handleDeleteTodo(index)}>X</button>
      </div>
    ))}
  </div>

  )
}

export default Child