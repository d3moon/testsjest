import React, { useState } from 'react'

const Dropdown = ({title, options, onSelect}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  return (
    <div className="c-dropdown">
      <button onClick={()=> setIsOpen(true)}>{title}</button>

      {isOpen && (
        <ul role="menu">
          {options.map(option => (
            <li key={option} role="menuitem" onClick={()=> handleSelect(option)}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;