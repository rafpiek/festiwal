import React from 'react';
import {withErrorLabel} from "../hoc/withErrorLabel";

const Checkbox = (props) => (
  <input type='checkbox' {...props} />
)

export default withErrorLabel(Checkbox)
