import React from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background: white;
  width: 100%;
  height: 100%;
  margin: 10px;
  position: relative;
  border-radius: 30px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.4);
`;

const CardContentTitle = styled.h2`
  color: #3fb7fc;
  font-size: 2.5vh;
  width: 85%;
`;

const CardMainContent = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #838080;
  width: 85%;
`;

const CardFooterContent = styled.h3`
  font-size: 2vh;
  color: #3fb7fc;
  width: 85%;
`;

export default function MobilCard() {
  return (
    <>
      <CardContainer>
        <CardContentTitle>
          Willkommen beim SLS - SICHERHEITSSERVICE
        </CardContentTitle>
        <CardMainContent>
          Warum sollten Sie sich für unser Unternehmen entscheiden?
          Sicherheitsdienste gibt es viele, aber letztendlich ist es immer
          Vertrauenssache, welchem Unternehmen Sie sich anvertrauen, und wer für
          Sie die Sicherheit übernimmt. Wir sind zertifiziert, das heißt unser
          Personal ist professionell ausgebildet und auf der Basis deutscher
          Standards geprüft.
        </CardMainContent>
        <CardFooterContent>
          Vertrauen Sie daher uns, SLS - Sicherheitsservice Ihrem
          professionellen Sicherheitsdienst in der Region.
        </CardFooterContent>
      </CardContainer>
    </>
  );
}
