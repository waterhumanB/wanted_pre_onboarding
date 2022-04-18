import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [onClickBox, setOnClickBox] = useState(false);

  return (
    <section>
      <section>Toggle</section>
      <section style={{ display: "flex" }}>
        <Box
          style={{
            backgroundColor: onClickBox === false ? "white" : "lightgray",
            color: onClickBox === false ? "black" : "white",
            transition: "linear .5s",
          }}
          onClick={() => {
            setOnClickBox(false);
          }}
        >
          기본
        </Box>
        <Box
          style={{
            backgroundColor: onClickBox === true ? "white" : "lightgray",
            color: onClickBox === true ? "black" : "white",
            transition: "linear .5s",
          }}
          onClick={() => {
            setOnClickBox(true);
          }}
        >
          상세
        </Box>
      </section>
    </section>
  );
};

export default Toggle;

const Box = styled.div`
  width: 150px;
  height: 100px;
  border: 1px solid black;
  text-align: center;
  border: 5px solid lightgray;
  box-sizing: border-box;
`;
