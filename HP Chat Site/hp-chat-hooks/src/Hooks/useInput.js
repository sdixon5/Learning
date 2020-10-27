import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    //console.log("e: " + e);
    //console.log("e.target.value: " + e.target.value);
    //console.log("e.target: " + e.target);
    if (e.target) {
      setValue(e.target.value);
    } else {
      setValue(e);
    }
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
