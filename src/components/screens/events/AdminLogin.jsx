import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import ArrowIcon from "../../../assets/icons/ArrowIcon";
import { AdminForm } from "./AdminFrom";
import authInstance from "./Firebase";

export function AdminLogin({
  series,
  handleLogout,
  setSeries,
  title,
  setTitle,
  date,
  setDate,
  link,
  isLoggedIn,
  setLink,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      console.log("Admin logged in successfully");
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  return (
    <>
      <LoginContainer isActive={isActive} isLoggedIn={isLoggedIn}>
        {" "}
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
        <AdminFormContainer isVisible={isLoggedIn}>
          <AdminForm
            link={link}
            handleLogout={handleLogout}
            setLink={setLink}
            series={series}
            setSeries={setSeries}
            title={title}
            setTitle={setTitle}
            date={date}
            setDate={setDate}
          />{" "}
          <LogoutText onClick={handleLogout}>Log Out</LogoutText>
        </AdminFormContainer>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  overflow: hidden;
  transition: max-height 0.5s ease-out;
  max-height: ${({ isActive, isLoggedIn }) =>
    isActive || isLoggedIn ? "800px" : "40px"};
`;

const LoginText = styled.div`
  padding-bottom: 16px;
  font-size: 14px;
  font-weight: 700;
  font-family: "OpenSans";
  cursor: pointer;
  transition: margin-bottom 0.3s ease;
  margin-bottom: ${({ isActive }) => (isActive ? "10px" : "-44px")};
  z-index: 2;
  margin-top: 12px;
`;
const LogoutText = styled.div`
  font-size: 14px;
  font-weight: 700;
  font-family: "OpenSans";
  cursor: pointer;
`;

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateX(10px);
  visibility: hidden;
  height: ${({ isActive }) => (isActive ? "auto" : "0")};
  overflow: hidden;
  transition: opacity 0.5s ease, transform 0.5s ease;

  ${({ isActive }) =>
    isActive &&
    `
      opacity: 1;
      transform: translateX(0);
      visibility: visible;
    `}

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const AdminFormContainer = styled.div`
  opacity: 0;
  background: #fff;
  border-radius: 12px;
  padding: 22px;
  margin-bottom: 12px;
  transform: translateY(10px);
  visibility: hidden;
  height: 0;
  height: ${({ isVisible }) => (isVisible ? "auto" : "0")};
  overflow: hidden;
  transition: all ease 0.5s;
  margin-top: 16px;

  ${({ isVisible }) =>
    isVisible &&
    `
      opacity: .85;
      transform: translateY(0);
      visibility: visible;
      transition-delay: 0s; 
      height: 100%;
    `}

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const LoginInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 180px;
  margin-right: 2px;
`;

const LoginButton = styled.button`
  border: none;
  cursor: pointer;
  margin-left: 4px;
`;

const Icon = styled(ArrowIcon)`
  background: white;
`;
