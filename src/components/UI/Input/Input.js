import React, { forwardRef, useImperativeHandle, useRef } from "react";
import classes from "../../Login/Login.module.css";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const active = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">{props.label}</label>
        <input
          type={props.type}
          id={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={inputRef}
        />
      </div>
    </div>
  );
});

export default Input;
