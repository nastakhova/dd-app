import React, { useState, useEffect } from "react";
import "./dropdown.styles.scss";

const options = ["option1", "option2", "option3", "option4", "option5"];

// add types for all functions , even it's only :void
// let's imagine you will get options and some callback as propertis. 
// Callback should back option to top 
// Could you plz handle this situation dont forget about Interface for DD

function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const [currentOption, setOption] = useState("choose option");

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return function cleanup() {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const open = "dropdown_list-options";
  const hidden = "dropdown_list-options dropdown_list-options--hidden";

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleClickOutside = (e: any) => {
    const className = e.target.className;
    if (
      className !== "dropdown_list-options" &&
      className !== "dropdown_current-option" &&
      className !== "dropdown_option"
    ) {
      setOpen(false);
    }
  };

  const handleChangeOption = (option: string) => {
    setOption(option); // also dd should close after choosing option
  };

  return (
    <div className="dropdown">
      <div className="dropdown_current-option" onClick={handleClick}>
        <span>{currentOption}</span>
      </div>
      <ul className={isOpen ? open : hidden}>
        {options.map((option: string) => (
          <li
            onClick={() => handleChangeOption(option)}
            className="dropdown_option"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
