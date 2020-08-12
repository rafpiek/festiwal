import React, {useState} from 'react';

export const Todo = ({ title }) => {

  const [completed, setCompleted] = useState(false)

  const handleTodoComplete = () => {
    setCompleted(!completed)
    // Do STH with TODO
  }

  return (
    <div className="container">
      <input type='checkbox' checked={completed} onChange={handleTodoComplete}/>
      <label>{title}</label>
    </div>
  )
}
