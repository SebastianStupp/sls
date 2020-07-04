import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { keyframes } from "@emotion/core";

const animationStartLeft = keyframes`

0%{
  left:-80%; top:0px; opacity:0;
  }
  
100%
{left:0%; top:0px; opacity: 1; 
}`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.2vh;
  text-align: center;
`;

const NavButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3fb7fc;
  width: 100%;
  min-height: 50px;
  max-height: 50px;
  min-width: 150px;
  margin: 15px 0 0 0;
  color: white;
  border: none;
  text-decoration: none;
  border-left: ${(props) => (props.active ? "8px solid white" : null)};
  position: relative;

  @media only screen and (max-width: 1050px) {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 98%;
  }

  :nth-of-type(1) {
    animation: ${animationStartLeft} 1s ease-in-out forwards 0.5s;
    opacity: 0;
  }
  :nth-of-type(2) {
    animation: ${animationStartLeft} 1s ease-in-out forwards 0.7s;
    opacity: 0;
  }
  :nth-of-type(3) {
    animation: ${animationStartLeft} 1s ease-in-out forwards 0.9s;
    opacity: 0;
  }
  :nth-of-type(4) {
    animation: ${animationStartLeft} 1s ease-in-out forwards 1.1s;
    opacity: 0;
  }
  :nth-of-type(5) {
    animation: ${animationStartLeft} 0.6s ease-in-out forwards 1.3s;
    opacity: 0;
  }
`;

export default function MenuButton({ links, value }) {
  return (
    <NavContainer>
      {links.map((link) => (
        <NavButton
          key={link.label}
          to={link.navLink}
          active={value === link.navLink}
        >
          {link.label}
        </NavButton>
      ))}
    </NavContainer>
  );
}

MenuButton.propTypes = {
  links: PropTypes.array,
  value: PropTypes.string,
};
