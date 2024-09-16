import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="blogs/page-1">Page 1 </Link>
      <Link href="blogs/page-2">Page 2 </Link>
      <Link href="blogs/images">Images</Link>
    </>
  );
}
