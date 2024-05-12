import React, { useState } from "react";
import Button from "./button";
import Checkbox from "./Checkbox";



const TodoRow = ({ label, onDelete }) => {
    const [hovered, setHovered] = useState(false);
    const [checked, setChecked] = useState(false);
  
    const handleDelete = () => {
      onDelete();
    };
  
    return (
      <div
        className="flex w-11/12 justify-evenly "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Checkbox
          label={label}
          checked={checked}
          onChange={(isChecked) => setChecked(isChecked)}
          className="justify-start"
        />
        {hovered && (
          <Button variant="small" onClick={handleDelete}>
            X
          </Button>
        )}
      </div>
    );
  };
  

  export default TodoRow;