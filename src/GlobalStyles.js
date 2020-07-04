import React from "react";
import { Global, css } from "@emotion/core";
import WebBackground from "./assets/WebBackground.svg";

function GlobalStyle() {
  return (
    <Global
      styles={() => css`
        @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          height: 100%;
          width: 100%;
          font-size: 16px;
          margin: 0;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          background-image: url(${WebBackground});
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}
    />
  );
}

export default GlobalStyle;
