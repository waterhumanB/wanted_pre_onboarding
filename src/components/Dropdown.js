import React, { useState } from "react";
import styled from "styled-components";

const Dropdown = () => {
  const DevLang = ["HTML", "CSS", "javaScript", "Java", "Python", "C#"];
  const [inputValue, setInputValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectValue, setSelectValue] = useState("");

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  return (
    <section>
      <section>Dropdown</section>
      <div style={{ position: "relative" }}>
        <input defaultValue={selectValue}></input>
        <img
          onClick={() => {
            setToggle(true);
            setSelectValue("");
          }}
          style={{
            width: "10px",
            position: "absolute",
            top: "8px",
            left: "160px",
          }}
          alt=""
          src="/arrowDown.png"
        />
      </div>
      {toggle && (
        <div>
          <input
            placeholder="입력하세요"
            type="text"
            onChange={inputValueHandler}
          ></input>
          {DevLang.filter((data) => {
            if (inputValue === "") {
              return data;
            } else if (data.toLowerCase().includes(inputValue.toLowerCase())) {
              return data;
            }
            return false;
          }).map((row, idx) => (
            <div
              style={{
                width: "177px",
                height: "20px",
                border: "solid 1px gray",
                boxSizing: "border-box",
              }}
              onClick={() => {
                setSelectValue(row);
                setToggle(false);
              }}
              key={idx}
            >
              {row}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Dropdown;
