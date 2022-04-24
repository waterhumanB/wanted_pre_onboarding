import React, { useState } from "react";
import styled from "styled-components";

const Input = () => {
  const [check, setCheck] = useState();
  const [visible, setVisible] = useState(false);

  const emailCheckHandler = (e) => {
    const emailValue = e.target.value;
    if (emailValue.includes("@")) {
      if (
        emailValue.length !== 0 &&
        emailValue.includes(".") &&
        emailValue.split("@") &&
        emailValue.split("@")[0].length !== 0 &&
        emailValue.split("@")[1].length !== 0 &&
        emailValue.split("@")[1] !== `.com` &&
        emailValue.split(".")[0].length !== 0 &&
        emailValue.split(".")[1].length !== 0
      ) {
        setCheck(emailValue);
      } else {
        setCheck("");
      }
    } else {
      setCheck("");
    }
  };

  const visibleHandler = () => {
    setVisible((e) => {
      return !e;
    });
  };

  return (
    <section>
      <section>Input</section>
      <section style={{ position: "relative" }}>
        <label>E-mail</label>
        <EamilCheck
          placeholder="E-mail"
          type="email"
          onChange={emailCheckHandler}
        ></EamilCheck>
        {check && <Img src="/checkMark.svg" />}
      </section>
      <section style={{ position: "relative" }}>
        <label>Password</label>
        <PassWordCheck
          placeholder="password"
          type={visible ? "text" : "password"}
        ></PassWordCheck>
        <Img
          onClick={visibleHandler}
          src={visible ? "/eyeOn.svg" : "eyeOff.svg"}
        />
      </section>
    </section>
  );
};

const EamilCheck = styled.input`
  display: block;
`;

const PassWordCheck = styled.input`
  display: block;
`;

const Img = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 21px;
  left: 150px;
`;

export default Input;
