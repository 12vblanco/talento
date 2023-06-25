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
          These terms and conditions outline the rules & regulations for the use
          of Talento's website. By accessing the website, we assume you accept
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
              We employ cookies on this website. Your utilization of Talento's
              website implies your consent to the utilization of cookies as
              outlined in Talento's Privacy Policy. For detailed information
              regarding cookies, their usage, and privacy protection, kindly
              refer to our Cookie Policy and Privacy Policy available on our
              website. Additionally, we may employ tracking technologies like
              Google Analytics to collect data about your website usage. This
              data aids us in analysing trends, administering the site, tracking
              user activities, and gathering demographic information.
            </P>
          </Li>
          <Li>
            Data Privacy Compliance:{" "}
            <P>
              By using our services, you entrust us with your personal
              information, and we take this responsibility very seriously. We
              adhere strictly to the Data Privacy Act of 2012 (Republic Act No.
              10173) of the Philippines in handling, processing, and storing
              your data. Our internal policies ensure that your personal
              information is safeguarded against unauthorized access,
              alteration, disclosure, or destruction. We will retain your
              personal information only for as long as is required by the
              relevant laws and regulations. Furthermore, we respect your rights
              to be informed, access, and object to the processing of your
              personal data, and to rectify, erase, or block any inaccuracies or
              inadequacies in your personal data as stipulated in the law. By
              continuing to use our services, you express your understanding and
              compliance with these terms. This version attempts to be more
              comprehensive but it's still important to have legal counsel
              review and possibly customize it in line with the specifics of
              your service or product and the data protection laws. It is
              crucial to make sure that the terms and conditions are compliant
              with the law.
            </P>
          </Li>
          <Li>
            Personal Data Collection and Processing:
            <P>
              When you submit a form or contact us through our website, we may
              gather personal information including your name, email address,
              contact number, organization/designation, and other pertinent
              details. This information is utilized to process your requests and
              furnish you with the services you have requested. Safeguarding
              your privacy and ensuring the secure handling of your personal
              information is our utmost priority. For further details on how we
              collect, use, and protect your personal data, kindly refer to
              Talento's Privacy Policy.
            </P>
          </Li>
          <Li>
            Intellectual Property Rights:
            <P>
              Unless stated otherwise, all materials on this website are owned
              by Talento and/or its licensors, and all intellectual property
              rights are reserved. You may access these materials from Talento
              for personal use, but you are subject to the restrictions set
              forth in the terms and conditions.
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
              The materials on Talento's website are provided on an "as-is"
              basis. We make no warranties, expressed or implied, and hereby
              disclaims and negates all of other warranties, including without
              limitation, implied warranties or conditions of merchantability.
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
  font-size: 18px;
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
const H4 = styled.p`
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
