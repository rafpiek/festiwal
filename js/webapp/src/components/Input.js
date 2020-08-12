import React from 'react';

export const INPUT_TYPES = {
  text: 'text',
  checkbox: 'checkbox',
  radio: 'radio',
}

export const Input = (props) => {
  const { type } = props

  const renderInput = () => {
    if (type === INPUT_TYPES.text) {
      return <input className="text-input" {...props} />
    }

    if (type === INPUT_TYPES.checkbox) {
      return <input className="checkbox" {...props}  />
    }

    if (type === INPUT_TYPES.radio) {
      return <input className="radio-button" {...props} />
    }
  }

  return (
    <div className='container'>
      {renderInput()}
    </div>
  )
}
