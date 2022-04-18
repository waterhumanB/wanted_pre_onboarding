import React, { useState } from "react";
import styled from "styled-components";

const Tab = () => {
  const [onFocusTabBox, setOnFocusTabBox] = useState(0);

  return (
    <section>
      Tab
      <section style={{ display: "flex" }}>
        {" "}
        <TabBox
          style={{
            color: onFocusTabBox === 0 ? "green" : "lightgray",
            borderBottom:
              onFocusTabBox === 0 ? "1px solid green" : "1px solid lightgray",
            transition: "linear .4s",
          }}
          onClick={() => {
            setOnFocusTabBox(0);
          }}
        >
          Vue
        </TabBox>
        <TabBox
          style={{
            color: onFocusTabBox === 1 ? "blue" : "lightgray",
            borderBottom:
              onFocusTabBox === 1 ? "1px solid blue" : "1px solid lightgray",
            transition: "linear .4s",
          }}
          onClick={() => {
            setOnFocusTabBox(1);
          }}
        >
          React
        </TabBox>
        <TabBox
          style={{
            color: onFocusTabBox === 2 ? "red" : "lightgray",
            borderBottom:
              onFocusTabBox === 2 ? "1px solid red" : "1px solid lightgray",
            transition: "linear .4s",
          }}
          onClick={() => {
            setOnFocusTabBox(2);
          }}
        >
          Angular
        </TabBox>
      </section>
    </section>
  );
};

export default Tab;

const TabBox = styled.div`
  width: 150px;
  height: 100px;
`;
