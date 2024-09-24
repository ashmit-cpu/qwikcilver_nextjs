// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import '../../../styles/navbar.css'

function Navbar() {
  return (
    <div className="Navbar mt-3">
      <div className="container m-3 rounded-full">
        <div className="flex flex-row justify-between">
          <div className="col my-auto ml-5 sticky top-0">
                <Image src={"/imgs/QC_Logo_White.png"}width={100}height={100}></Image>
          </div>
          <div className="nav-link">
            <ul className="flex flex-row">
              <li>
                <Link href={"/"} className="text-white">Home</Link>
              </li>
              <li>
                <Link href={"/about"}className="text-white">About Us</Link>
              </li>
              <li>
                <Link href={"/solutions"}className="text-white">Solutions</Link>
              </li>
              <li>
                <Link href={"/"}className="text-white">Industries</Link>
              </li>
            </ul>
            <Link href={"/contact"}className="outline-btn text-white">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
