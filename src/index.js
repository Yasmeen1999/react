import React from "react";
import ReactDOM from "react-dom";
//components imports
import InputField from "./components/InputField";

const App = () => {
  return (
    <div>
      <InputField />
      <InputField />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
