import React from "react";

const InputField = () => {
  return (
    <div>
      <label>enter your name:</label>
      <input type="text" />
      <button style={{ color: "red", backgroundColor: "green" }}>submit</button>
    </div>
  );
};

export default InputField;
