import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../misc/CTAButton";

const ContactForm = () => {
  return (
    <Div>
      <h4>Please get in touch</h4>
      <Form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </p>
        <FormRow>
          <Label htmlFor="Name"> Name*</Label>
          <Input type="text" id="Name" name="Name" required />
        </FormRow>
        <FormRow>
          {" "}
          <Label htmlFor="organization">Organization</Label>
          <Input type="text" id="organization" name="organization" />
        </FormRow>
        <FormRow>
          <Label htmlFor="email">Email Address*</Label>
          <Input type="email" id="email" name="email" required />
        </FormRow>
        <FormRow>
          {" "}
          <Label htmlFor="contactNumber">Contact Number</Label>
          <Input type="tel" id="contactNumber" name="contactNumber" required />
        </FormRow>
        <FormRow>
          <Label htmlFor="subject">Subject*</Label>
          <Input type="text" id="subject" name="subject" required />
        </FormRow>

        <FormRow>
          <Label htmlFor="message">Message*</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Please tell us about your background, your goals and anything you might consider important"
            required
          />
        </FormRow>
        <CheckboxContainer>
          <Checkbox id="myCheckbox" />
          <CheckboxLabel htmlFor="myCheckbox">
            I agree to the{" "}
            <Link to="/term">
              <b>terms & conditions</b>
            </Link>{" "}
            <br />
            and to be contacted regarding this message.
          </CheckboxLabel>
        </CheckboxContainer>
        <ButtonRow>
          <CTAButton inverted={true} type="submit">
            Submit
          </CTAButton>
        </ButtonRow>
      </Form>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const Form = styled.form`
  font-family: "Roboto";
  margin: 0 auto;
  padding: 10px 30px;
  max-width: 400px;
  overflow: auto;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(233, 123, 27, 0.1);
  @media (max-width: 440px) {
    max-width: 100%;
    width: 100%;
    min-width: 320px;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  @media (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Input = styled.input`
  margin: 2px 0;
  padding: 2px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 15px;
  @media (max-width: 440px) {
    width: 80%;
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
    width: 80%;
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
  width: 220px;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const CheckboxLabel = styled.label`
  position: relative;
  padding-left: 58px;
  line-height: 1.2;
  cursor: pointer;
  color: black;

  @media (max-width: 440px) {
    font-size: 13px;
    padding-left: 42px;
    margin-bottom: 4px;
    width: 60%;
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
    /* background: #333; */
    background: rgba(253, 134, 66, 0.7);
    transition: all 0.2s ease;
    opacity: 0;
    transform: scale(0);
    border-radius: 3px;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Checkbox}:checked + ${CheckboxLabel}:after {
    opacity: 1;
    transform: scale(1);
  }
`;

const TermsLabel = styled.label`
  font-size: 14px;
  color: #333;
`;
export default ContactForm;
