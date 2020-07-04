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
          height: 100vh;
          width: 100vw;
          font-size: 16px;
          margin: 0;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
          background-image: url(${WebBackground});
          background-attachment: fixed;
          background-repeat: no-repeat;
          background-size: fill;
        }
      `}
    />
  );
}

export default GlobalStyle;
