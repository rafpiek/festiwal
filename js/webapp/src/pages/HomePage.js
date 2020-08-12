import React from 'react';
import {TextInput} from "../components/TextInput";
import {Checkbox} from "../components/Checkbox";
import {RadioButton} from "../components/RadioButton";

export const HomePage = () => {
  return (
    <div className="container">
      <TextInput />
      <Checkbox />
      <RadioButton />
    </div>
  )
}
