import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <h1>Services Page</h1>
      <Link href="services/web-design">Website Design </Link>
      <Link href="services/graphic-design" replace>Graphic Design</Link>
    </>
  );
}
