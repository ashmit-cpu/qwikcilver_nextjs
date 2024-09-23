// import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="Navbar justify-center">
      <div className="container ">
        <div className="flex flex-row justify-between">
          <div className="col">
          <h1 className="text-4xl font-bold underline text-red-600">Hello world!</h1>

          </div>
          <div className="col">
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About Us</Link>
              </li>
              <li>
                <Link href={"/solutions"}>Solutions</Link>
              </li>
              <li>
                <Link href={"/"}>Industries</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
