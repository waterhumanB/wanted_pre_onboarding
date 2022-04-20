import React, { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [onClickBox, setOnClickBox] = useState(false);

  return (
    <section>
      <section>Toggle</section>
      <section style={{ position: "relative", display: "flex", opacity: 0.8 }}>
        <Box
          style={{
            backgroundColor: "gray",
            color: onClickBox === false ? "black" : "white",
          }}
          onClick={() => {
            setOnClickBox(false);
          }}
        >
          기본
        </Box>
        <ToggleBox
          style={{
            marginLeft: onClickBox === true ? "155px" : "5px",
            transition: "linear .5s",
          }}
        ></ToggleBox>
        <Box
          style={{
            backgroundColor: "gray",
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
  font-weight: bold;
  border: 1px solid black;
  text-align: center;
  border: 5px solid gray;
  box-sizing: border-box;
  z-index: -1;
`;

const ToggleBox = styled.div`
  width: 140px;
  height: 90px;
  background: black;
  opacity: 0.3;
  position: absolute;
  margin-top: 5px;
`;
