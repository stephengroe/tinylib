import React from 'react';
import '../styles/forminput.css';

function FormInput({ type, label, name, value, onChange }) {
  return (
    <label>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      <span aria-live="polite" className="error inactive"></span>
    </label>
  )
}

export default FormInput;