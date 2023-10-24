import React from 'react';

function FormInput({ type, label, name, value }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        defaultValue={value}
      ></input>
      <span aria-live="polite" className="error inactive"></span>
    </label>
  )
}

export default FormInput;