import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex justify-center" >
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 text-blue-500"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="ml-2">{label}</label>
    </div>
  );
};

export default Checkbox;