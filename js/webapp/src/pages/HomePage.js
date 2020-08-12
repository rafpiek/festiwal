import React from 'react';
import {Input, INPUT_TYPES} from "../components/Input";

export const HomePage = () => {
  return (
    <div className="container">
      <Input type={INPUT_TYPES.text} />
      <Input type={INPUT_TYPES.checkbox} />
      <Input type={INPUT_TYPES.radio} />
    </div>
  )
}
