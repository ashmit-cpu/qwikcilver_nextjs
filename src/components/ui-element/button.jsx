import Link from "next/link";
import React from "react";

export default function Button({ content, href }) {
  return (
    <Link href={href} className="primary_btn">
      {content}
    </Link>
  );
}