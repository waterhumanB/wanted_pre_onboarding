import React, { useState } from "react";
import styled from "styled-components";

const Slider = () => {
  const [value, setValue] = useState();

  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  const optionValueHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <section>
      <section>Slider</section>
      <Result>{value}%</Result>
      <section>
        <input
          style={{ width: "300px" }}
          type="range"
          min="1"
          max="100"
          step="1"
          list="value"
          value={value}
          onChange={valueHandler}
        ></input>
        <section>
          <datalist
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-between",
            }}
            id="value"
          >
            <Option value={1} label="1%" onClick={optionValueHandler}></Option>
            <Option value={25} label="25%" onClick={optionValueHandler}>
              25%
            </Option>
            <Option value={50} label="50%" onClick={optionValueHandler}>
              50%
            </Option>
            <Option value={75} label="75%" onClick={optionValueHandler}>
              75%
            </Option>
            <Option value={100} label="100%" onClick={optionValueHandler}>
              100%
            </Option>
          </datalist>
        </section>
      </section>
    </section>
  );
};
const Result = styled.div`
  text-align: right;
  border: solid 1px lightgray;
  width: 300px;
  height: 30px;
`;

const Option = styled.option`
  border-radius: 20px;
  background: lightgray;
  padding: 5px;
  cursor: pointer;
  :hover {
    background: lightblue;
    font-weight: bold;
  }
`;

export default Slider;
