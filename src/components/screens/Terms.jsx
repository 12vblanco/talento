import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CTAButton from "../misc/CTABUtton";
import ScrollToTop from "../misc/ScrollToTop";

const Terms = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Div>
        <H1>Terms and Conditions</H1>
        <H4>
          <b>
            Welcome to Talento! <b />
          </b>
          <br /> <br />
          These terms and conditions outline the rules and regulations for the
          use of our website. By accessing this website, we assume you accept
          these terms and conditions in full. <br />
          <b>
            Please do not continue to use Talento's website if you do not accept
            all of the terms and conditions stated on this page.
          </b>{" "}
          <br />
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, and Disclaimer Notice and any or all Agreements:
          "Client," "You," and "Your" refers to you, the person accessing this
          website and accepting Talento's terms and conditions. "The Company,"
          "Ourselves," "We," "Our," and "Us" refers to our company, Talento.
          "Party," "Parties," or "Us" refers to both the Client and ourselves,
          or either the Client or ourselves.
        </H4>
        <ol>
          <Li>
            Cookies and Tracking:
            <P>
              We use cookies on this website. By using Talento's website, you
              consent to the use of cookies in accordance with Talento's Privacy
              Policy. Our Cookie Policy and Privacy Policy explain what cookies
              are, how we use them, and how we protect your privacy. You can
              find this information on our website. We may also use tracking
              technologies such as Google Analytics to gather information about
              your usage of our website. This information helps us analyze
              trends, administer the site, track user movements, and gather
              demographic information.
            </P>
          </Li>
          <Li>
            Personal Data Collection and Processing:
            <P>
              When you submit a form or contact us through our website, we may
              collect personal information such as your name, email address,
              contact number, organization/designation, and other relevant
              details. We use this information to process your requests and
              provide you with the requested services. We are committed to
              protecting your privacy and handling your personal information
              securely. Please refer to Talento's Privacy Policy for more
              information on how we collect, use, and protect your personal
              data.
            </P>
          </Li>
          <Li>
            Intellectual Property Rights:
            <P>
              Unless otherwise stated, Talento and/or its licensors own the
              intellectual property rights for all materials on this website.
              All intellectual property rights are reserved. You may access this
              from Talento for your personal use, subject to restrictions set in
              these terms and conditions.
            </P>
          </Li>
          <Li>
            Restrictions:
            <P>
              You are specifically restricted from all of the following:
              Publishing any website material in any other media. Selling,
              sublicensing, and/or otherwise commercializing any website
              material. Publicly performing and/or showing any website material.
              Using this website in any way that is or may be damaging to this
              website. Using this website in any way that impacts user access to
              this website. Using this website contrary to applicable laws and
              regulations or in a way that causes, or may cause, harm to the
              website or to any person or business entity. Engaging in any data
              mining, data harvesting, data extracting, or any other similar
              activity in relation to this website. We reserve the right to
              restrict access to certain areas of this website, or the entire
              website, at our discretion. Any user ID and password you may have
              for this website are confidential and you must maintain
              confidentiality as well.
            </P>
          </Li>
          <Li>
            Disclaimer:
            <P>
              The materials on Talento's website are provided on an "as is"
              basis. Talento makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties, including
              without limitation, implied warranties or conditions of
              merchantability.
            </P>
          </Li>
        </ol>
        <P>
          If you have any questions or comments regarding these terms and
          conditions, please contact us using the <a href="/contact">contact</a>{" "}
          form on our website.
        </P>
        <Btn onClick={handleGoBack}>
          <CTAButton onClick={ScrollToTop}>{"Go back"}</CTAButton>
        </Btn>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #333;
  padding: 18% 10%;
  line-height: 1.5;
  @media (max-width: 499px) {
    margin-top: 12%;
    padding: 5%;
  }
`;

const Li = styled.li`
  font-family: "Montserrat";
  font-weight: 500;
`;

const Btn = styled.h1`
  font-family: "Montserrat";
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 0;
`;
const H1 = styled.h1`
  font-family: "Montserrat";
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
`;
const H4 = styled.h4`
  font-family: "OpenSans";
  margin: 20px auto;
  font-weight: 500;
  line-height: 1.5;
`;
const P = styled.p`
  font-family: "OpenSans";
  margin-top: 18px;
  margin-bottom: 12px;
`;

export default Terms;
