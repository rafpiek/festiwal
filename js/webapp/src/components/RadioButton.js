import React from 'react';
import { withErrorLabel} from "../hoc/withErrorLabel";

const RadioButton = (props) => (
  <input type='radio' {...props} />
)

export default withErrorLabel(RadioButton)
