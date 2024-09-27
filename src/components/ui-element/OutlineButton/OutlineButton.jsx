import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import '../../../styles/OutlineButton.css';


function OutlineButton({ content, href }) {
  return (
    <Link href={href} className="OutlineButton">
      {content} <FaArrowRightLong />
    </Link>
  );
}

export default OutlineButton;
