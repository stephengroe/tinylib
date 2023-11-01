import React from "react";

const AddButton = () => {
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Add book");
  };

  return (
    <button
      id="add-button"
      aria-label='Add new book'
      onClick={handleClick}
    >+</button>
  )
}

export default AddButton;
