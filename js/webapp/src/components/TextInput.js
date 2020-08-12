import React from 'react';
import { withErrorLabel} from "../hoc/withErrorLabel";

const TextInput = (props) => (
  <input type='text' {...props} />
)

export default withErrorLabel(TextInput)

