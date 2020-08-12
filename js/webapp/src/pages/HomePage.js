import React from 'react';
import TextInput from "../components/TextInput";
import Checkbox from "../components/Checkbox";
import RadioButton from "../components/RadioButton";
import {ProfileInfo} from "../shared/components/ProfileInfo";

export const HomePage = () => {
  return (
    <div className="container">
      <ProfileInfo view={ProfileInfo} />
    </div>
  )
}
