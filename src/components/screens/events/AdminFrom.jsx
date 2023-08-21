import { doc, setDoc } from "firebase/firestore";
import React from "react";
import styled from "styled-components";
import { db } from "./Firebase";

async function handleSubmit(event, series, title, date, link) {
  event.preventDefault();
  if (!series || !title || !date) {
    console.error("One or more fields are undefined or empty.");
    return;
  }

  try {
    const eventDoc = doc(db, "events", "fixedEventId");
    await setDoc(
      eventDoc,
      {
        series: series,
        title: title,
        date: date,
        link: link,
      },
      { merge: true }
    );

    console.log("Document written with ID: fixedEventId");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  console.log({ series, title, date, link });
}

export function AdminForm({
  series,
  setSeries,
  title,
  setTitle,
  date,
  setDate,
  link,
  setLink,
}) {
  return (
    <FormContainer
      onSubmit={(event) => handleSubmit(event, series, title, date, link)}
    >
      <Text>Admin, You Are Logged In!</Text>
      <Label>Series name</Label>
      <LoginInput
        type="text"
        value={series}
        onChange={(e) => setSeries(e.target.value)}
        placeholder="Series"
      />
      <Label>Title</Label>
      <LoginInput
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />{" "}
      <Label>Date</Label>
      <LoginInput
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Date"
      />{" "}
      <Label>Link</Label>
      <LoginInput
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link"
      />
      <LoginButton type="submit">Update</LoginButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

const LoginInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 70%;
  margin-top: 4px;
  min-width: 280px;
`;

const LoginButton = styled.button`
  font-family: "OpenSans";
  font-weight: 700;
  border: none;
  cursor: pointer;
  margin-top: 8px;
`;

const Text = styled.p``;
const Label = styled.p`
  font-size: 12px;
  align-self: flex-start;
  margin-bottom: -6px;
  margin-left: 5px;
  font-weight: 700;
`;
