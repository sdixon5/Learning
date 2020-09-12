import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (event, data) => {
    //console.log("handle change: " + data.value);
    //console.log("event: " + event);
    //console.log(data);
    setValue(data.value);
  };

  const reset = () => {
    setValue("");
  };

  return [value, handleChange, reset];
};
