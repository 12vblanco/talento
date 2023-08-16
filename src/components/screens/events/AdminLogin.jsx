import "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../../assets/icons/ArrowIcon";

export function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log("Admin logged in successfully");
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  return (
    <LoginContainer>
      <LoginText isActive={isActive} onClick={() => setIsActive(!isActive)}>
        Admin login
      </LoginText>

      <LoginForm isActive={isActive} onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">
          <Icon />
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  /* position: absolute;
  top: 12px;
  right: 12px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-right: 32px; */
`;

const LoginText = styled.div`
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  font-family: "OpenSans";
  cursor: pointer;
  margin-right: ${({ isActive }) => (isActive ? "10px" : "-440px")};
  transition: margin-right 0.3s ease;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateX(10px);
  visibility: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ isActive }) =>
    isActive &&
    `
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    `}
`;

const LoginInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 180px;
  margin-right: 2px;
`;

const LoginButton = styled.button`
  /* background: white; */
  border: none;
  cursor: pointer;
  margin-left: 4px;
  /* margin-left: 5px;
    padding-right: 5px;
    height: 26px;
    width: 26px; */
`;

const Icon = styled(ArrowIcon)`
  background: white;
`;
