import React from 'react';
import {ErrorLabel} from "./ErrorLabel";

export const TextInput = (props) => {
  const { error, ...restProps } = props

  return (
    <div>
      <input type='text' {...restProps} />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </div>
  )
}

