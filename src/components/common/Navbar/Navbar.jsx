// import Image from "next/image";
"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import '../../../styles/navbar.css'
import MenuContext from "@/Context/menuProvider";


function Navbar() {
  const { menuOpen, handleToggleMenu, } = useContext(MenuContext);
  const [checkElement, setCheckElement] = useState(null);

  // Effect to access 'check' element after component is mounted
  useEffect(() => {
    setCheckElement(document.getElementById('check'));
  }, []);

  const handleMenuItemClick = () => {
    // Close the menu on mobile screens if checkElement is available
    if (checkElement) {
      checkElement.click();
    }

  
  };

  return (
    <div className="Navbar mt-3">
      <div className="container m-3 rounded-full">
        <div className="flex flex-row justify-between">
          <div className="col my-auto ml-5 sticky top-0">
                <Image src={"/imgs/QC_Logo_White.png"}width={100}height={100}></Image>
          </div>
          <div className="nav-menu">
            <ul className={menuOpen ? 'nav-links active' : 'nav-links'}>
              <li>
                <Link href={"/"} onClick={() => handleMenuItemClick('/')}className="text-white">Home</Link>
              </li>
              <li>
                <Link href={"/about"}onClick={() => handleMenuItemClick('/about')} className="text-white">About Us</Link>
              </li>
              <li>
                <Link href={"/solutions"}onClick={() => handleMenuItemClick('/solutions')} className="text-white">Solutions</Link>
              </li>
              <li>
                <Link href={"/industries"}onClick={() => handleMenuItemClick('/industries')} className="text-white">Industries</Link>
              </li>

            <Link href={"/contact"}onClick={() => handleMenuItemClick('/contact')} className="outline-btn text-white">Contact Us</Link>

            </ul>

            <div className="menu-button">
              <label htmlFor="check">
                <input type="checkbox" id="check" onChange={handleToggleMenu} />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
