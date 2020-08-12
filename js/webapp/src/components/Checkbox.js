import React from 'react';
import {withErrorLabel} from "../hoc/withErrorLabel";

export const Checkbox = withErrorLabel((props) => (
  <input type='checkbox' {...props} />
))
