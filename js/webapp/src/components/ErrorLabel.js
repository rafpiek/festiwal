import React from 'react';

export const ErrorLabel = (props) => {
  const { children, ...restProps } = props

  return (
    <span className='error' {...restProps}>{children}</span>
  )
}
