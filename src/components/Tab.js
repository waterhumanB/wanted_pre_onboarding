import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [onFocusTabBox, setOnFocusTabBox] = useState(0);

  return (
    <section>
      Tab
      <section style={{ position: "relative", display: "flex" }}>
        <Box
          style={{
            color: onFocusTabBox === 0 ? "green" : "gray",
            transition: "linear .3s",
          }}
          onClick={() => {
            setOnFocusTabBox(0);
          }}
        >
          Vue
        </Box>
        <Box
          style={{
            color: onFocusTabBox === 1 ? "blue" : "gray",
            transition: "linear .3s",
          }}
          onClick={() => {
            setOnFocusTabBox(1);
          }}
        >
          React
        </Box>
        <Box
          style={{
            color: onFocusTabBox === 2 ? "red" : "gray",
            transition: "linear .3s",
          }}
          onClick={() => {
            setOnFocusTabBox(2);
          }}
        >
          Angular
        </Box>
        <TabBox
          style={{
            borderBottom:
              (onFocusTabBox === 0 && "5px solid green") ||
              (onFocusTabBox === 1 && "5px solid blue") ||
              (onFocusTabBox === 2 && "5px solid red"),
            marginLeft:
              (onFocusTabBox === 0 && "0px") ||
              (onFocusTabBox === 1 && "150px") ||
              (onFocusTabBox === 2 && "300px"),
            transition: "linear .3s",
          }}
        ></TabBox>
      </section>
    </section>
  );
};

export default Tab;

const Box = styled.div`
  text-align: center;
  font-weight: bold;
  width: 150px;
  height: 30px;
  border-bottom: 5px solid lightgray;
  opacity: 0.5;
`;
const TabBox = styled.div`
  font-weight: bold;
  width: 150px;
  height: 30px;
  position: absolute;
  z-index: -1;
`;
