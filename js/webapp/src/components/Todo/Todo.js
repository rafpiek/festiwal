import React, {useState} from 'react';
import {useCompleted} from "../../hooks/useCompleted";

export const Todo = ({ title }) => {
  const [completed, handleComplete] = useCompleted()

  return (
    <div className="container">
      <input type='checkbox' checked={completed} onChange={handleComplete}/>
      <label>{title}</label>
    </div>
  )
}
