import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import bgImgBk from "../../../assets/img/about1.jpg";
import { AdminLogin } from "./AdminLogin";
import { EventForm } from "./EventForm";
import authInstance from "./Firebase";

export function EventBody() {
  const [series, setSeries] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const eventDoc = doc(db, "events", "fixedEventId");

      try {
        const docSnap = await getDoc(eventDoc);

        if (docSnap.exists()) {
          setSeries(docSnap.data().series);
          setTitle(docSnap.data().title);
          setDate(docSnap.data().date);
          setLink(docSnap.data().link);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authInstance, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(authInstance);
      console.log("Admin logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <Div>
      <AdminLogin
        series={series}
        setSeries={setSeries}
        title={title}
        setTitle={setTitle}
        date={date}
        setDate={setDate}
        link={link}
        setLink={setLink}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
      />

      <EventContainer>
        <EventForm
          series={series}
          title={title}
          date={date}
          link={link}
          setSeries={setSeries}
        />
      </EventContainer>
    </Div>
  );
}

const Div = styled.div`
  position: relative;
  width: 60vw;
  height: fit-content;
  background-image: url(${bgImgBk});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 50px;
  border-radius: 10px;
  color: #000;
  @media (max-width: 899px) {
    width: 96vw;
    margin: 0 auto;
  }
`;

const EventContainer = styled.div`
  width: 78%;
  height: fit-content;
  background: #fd8642;
  opacity: 0.85;
  border-radius: 6px;
  padding: 1rem 1.6rem;
`;
