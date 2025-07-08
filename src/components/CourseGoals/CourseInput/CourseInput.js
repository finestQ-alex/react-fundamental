import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // 값이 빈 스트링일 경우 빨간색 배경 보이게 하기
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setEnteredValue("");
      return;
    }
    props.onAddGoal(enteredValue);
  };

  console.log(isValid);

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${!isValid ? "invalid" : ""}`}> */}
      <FormControl>
        {/* <label>목표</label> */}
        <FormControlLabel>목표</FormControlLabel>
        {/* <input type="text" onChange={goalInputChangeHandler} /> */}
        <FormControlInput
          type="text"
          onChange={goalInputChangeHandler}
          isValid={isValid}
        />
        {/* </div> */}
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;

const FormControl = styled.div`
  margin: 0.5rem 0;
`;

const FormControlLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

const FormControlInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  ${(props) =>
    !props.isValid &&
    `background: salmon;
    border-color: red;
    `}
`;
