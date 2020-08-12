import React from 'react';

export const withErrorLabel = BaseComponent => (props) => {
  const { error, ...restProps } = props

  return (
    <>
      <BaseComponent {...restProps} />
      <ErrorLabel>{error}</ErrorLabel>
    </>
  )
}

export const ErrorLabel = (props) => {
  const { children, ...restProps } = props

  return (
    <span className='error' {...restProps}>{children}</span>
  )
}
