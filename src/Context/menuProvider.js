"use client";

import { createContext, useState } from "react";

const MenuContext = createContext(false);

export const MenuProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbar, setnavbar] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
    const html = document.querySelector("html");
    if (html && window.innerWidth > 768) {
      html.style.overflowY = menuOpen ? "auto" : "hidden"; // Toggle scroll lock
    }
  };

  const handleNavbar = () => {
    if (window.scrollY > 500) {
      setnavbar(true);
    } else {
      setnavbar(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleNavbar);
  }

  return (
    <MenuContext.Provider
      value={{ menuOpen, navbar, handleToggleMenu, handleNavbar }}
    >
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContext;
