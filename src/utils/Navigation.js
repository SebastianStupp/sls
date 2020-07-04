import React from "react";
import { useLocation } from "react-router-dom";
import MenuButton from "../components/MenuButton";

const Navigation = () => {
  const location = useLocation();
  return (
    <MenuButton
      links={[
        { label: "Startseite", navLink: "/" },
        { label: "Über Uns", navLink: "/about" },
        { label: "Services", navLink: "/services" },
        { label: "Kontakt", navLink: "/contact" },
        { label: "Impressum", navLink: "/impressum" },
      ]}
      value={location.pathname}
    />
  );
};
export default Navigation;
