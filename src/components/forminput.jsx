import React from 'react';

function FormElement({ label, type, name, value }) {
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

export default FormElement;