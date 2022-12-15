import React from "react";
import "./CardInput.css";

const CardInput = (props) => {
  // const debounce = (fn, timeout = 3000) => {
  //   let timer = null;
  //   return function (...args) {
  //     if (timer) {
  //       clearTimeout(timer);
  //       timer = null;
  //     }
  //     timer = setTimeout(() => {
  //       timer = null;
  //       fn.apply(this, args);
  //     }, timeout);
  //   };
  // };

  // const saveInput = (value) => {
  //   console.log("Saving data");
  //   console.log(value);
  // };
  // const processChange = debounce(saveInput);

  return (
    <div className="input-box">
      <input
        placeholder="search here... "
        onChange={props.onChangeHandler}
        value={props.valueHandler}
        // onKeyUp={(e) => processChange(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default CardInput;
