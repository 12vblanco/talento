import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../../misc/CTABUtton";
import ScrollToTop from "../../misc/ScrollToTop";

const ContactForm = () => {
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("contact-form");
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/Success"))
      .catch((error) => alert(error));
  };
  return (
    <Div>
      <ScrollToTop />

      <H4>
        Let us know how we can work together
        <br />
        by sending us a completed form:
      </H4>
      <Form
        id="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        onSubmit={submitHandler}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <FormRow>
          <Label style={{ width: "100%" }} htmlFor="Name">
            Full Name*
          </Label>
          <Input type="text" id="Name" name="Name" required />
        </FormRow>
        <FormRow>
          {" "}
          <Label style={{ width: "100%" }} htmlFor="organization">
            Organization/{"\n"}Designation
          </Label>
          <Input type="text" id="organization" name="organization" />
        </FormRow>
        <FormRow>
          <Label style={{ width: "100%" }} htmlFor="email">
            Email Address*
          </Label>
          <Input type="email" id="email" name="email" required />
        </FormRow>
        <FormRow>
          {" "}
          <Label style={{ width: "100%" }} htmlFor="contactNumber">
            Contact Number
          </Label>
          <Input type="tel" id="contactNumber" name="contactNumber" />
        </FormRow>
        <FormRowCol>
          <Label
            style={{ marginTop: "12px", width: "100%", marginBottom: "2px" }}
            htmlFor="support"
          >
            How can we support you?
          </Label>
          <FormRow>
            <CheckboxContainer
              style={{ marginTop: "12px", width: "50%", marginBottom: "18px" }}
            >
              <SupportCheckbox
                id="job"
                name="support"
                value="Type of support"
                style={{ width: "24px", height: "24px" }}
              />
              <SupportCheckboxLabel htmlFor="job">
                Job Profile
              </SupportCheckboxLabel>
            </CheckboxContainer>
          </FormRow>
          <FormRow>
            <CheckboxContainer style={{ width: "50%", marginBottom: "12px" }}>
              <SupportCheckbox
                id="recruitment"
                name="support"
                value="Recruitment and Selection"
                style={{ width: "24px", height: "24px" }}
              />
              <SupportCheckboxLabel htmlFor="recruitment">
                Recruitment & Selection
              </SupportCheckboxLabel>
            </CheckboxContainer>
          </FormRow>
          <FormRow>
            <CheckboxContainer style={{ width: "50%", marginBottom: "12px" }}>
              <SupportCheckbox
                id="competency"
                name="support"
                value="Competency Framework"
                style={{ width: "24px", height: "24px" }}
              />
              <SupportCheckboxLabel htmlFor="competency">
                Competency Framework
              </SupportCheckboxLabel>
            </CheckboxContainer>
          </FormRow>
          <FormRow>
            <CheckboxContainer style={{ width: "50%" }}>
              <SupportCheckbox
                id="performance"
                name="support"
                value="Performance Management"
                style={{ width: "24px", height: "24px" }}
              />
              <SupportCheckboxLabel htmlFor="performance">
                Performance Management
              </SupportCheckboxLabel>
            </CheckboxContainer>
          </FormRow>
          <FormRow>
            <CheckboxContainer style={{ width: "50%" }}>
              <SupportCheckbox
                id="training"
                name="support"
                value="Training and Coaching"
                style={{ width: "24px", height: "24px" }}
              />
              <SupportCheckboxLabel htmlFor="training">
                Training & Coaching
              </SupportCheckboxLabel>
            </CheckboxContainer>
          </FormRow>
        </FormRowCol>
        <FormRow>
          <Label style={{ marginTop: "22px", width: "100%" }} htmlFor="message">
            Please provide basic details about the support. *
          </Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Please tell us about your background, your goals and anything you might consider important"
            required
          />
        </FormRow>
        <FormRow>
          <Label
            style={{ marginTop: "12px", width: "100%" }}
            htmlFor="callTime"
          >
            What would be the best time to call for an exploratory talk? Please
            specify timezone.
          </Label>
          <TextArea
            style={{ height: "44px", marginBottom: "12px" }}
            id="callTime"
            name="callTime"
          />
        </FormRow>

        <CheckboxContainer>
          <Checkbox id="myCheckbox" />
          <CheckboxLabel
            style={{ height: "40px", marginBottom: "8px", paddingTop: "4px" }}
            htmlFor="myCheckbox"
          >
            I agree to the{" "}
            <Link to="/terms">
              <b>terms & conditions</b>
            </Link>{" "}
            <br />
            and to be contacted regarding this message.
          </CheckboxLabel>
        </CheckboxContainer>
        <ButtonRow>
          <CTAButton inverted={true} type="submit">
            {"Submit"}
          </CTAButton>
        </ButtonRow>
      </Form>
    </Div>
  );
};

const FormRowCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 10px;
  margin: 6px 0;
  @media (max-width: 555px) {
    gap: 2px;
    margin: 2px 0;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SupportCheckboxLabel = styled.label`
  color: #333;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  max-width: 150px;
`;

const SupportCheckbox = styled.input.attrs({ type: "checkbox" })``;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  @media (max-width: 555px) {
    margin-top: 10px;
    max-width: 100vw;
  }
`;

const Form = styled.form`
  font-family: "OpenSans-Medium";
  margin: 0 auto;
  padding: 10px 20px;
  max-width: 490px;
  width: 98%;
  height: auto;
  overflow: auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(233, 123, 27, 0.1);
  @media (max-width: 550px) {
    width: 90%;
    margin: 0 4px;
    min-width: 320px;
  }
`;

const H4 = styled.h4`
  margin-top: 52px;
  width: 530px;
  color: #333;
  padding-left: 40px;
  @media (max-width: 550px) {
    margin-top: 42px;
    width: 100%;
    font-size: 17px;
    padding-left: 12px;
    width: 360px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  @media (max-width: 550px) {
    padding-right: 50px;
    margin-top: 32px;
  }
`;

const Input = styled.input`
  margin: 2px 0;
  padding: 2px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;

  @media (max-width: 550px) {
    width: 98%;
  }
`;

const TextArea = styled.textarea`
  margin: 8px 0;
  padding: 6px;
  width: 100%;
  height: 80px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
  @media (max-width: 440px) {
    width: 98%;
  }
`;

const Label = styled.label`
  font-family: "Montserrat";
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #333;
  display: block;
  margin-top: 6px;
  width: 228px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckboxLabel = styled.label`
  font-family: "OpenSans";
  font-size: 13px;
  position: relative;
  padding-left: 58px;
  line-height: 1.2;
  cursor: pointer;
  color: black;

  @media (max-width: 550px) {
    padding-left: 42px;
    margin-bottom: 4px;
    width: 70%;
  }

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    width: 34px;
    height: 34px;
    border: 1px solid #aaa;
    background: #fff;
    border-radius: 3px;
    box-sizing: border-box;
  }

  &:after {
    content: "";
    position: absolute;
    left: 3px;
    top: 6px;
    width: 28px;
    height: 28px;
    border-radius: 1px;
    background: rgba(253, 134, 66, 0.7);
    transition: all 0.2s ease;
    opacity: 0;
    transform: scale(0);
    border-radius: 3px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Checkbox}:checked + ${CheckboxLabel}:after {
    opacity: 1;
    transform: scale(1);
  }
`;

export default ContactForm;
