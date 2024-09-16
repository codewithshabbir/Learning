import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function blgoSlug() {
  const router = useRouter();
  const slug = router.query.blog_slug;
  console.log(router.query.blog_slug);

  return (
    <>
      <h1>this is the {slug}</h1>
      <Link href="blog/images/image-1">Image 1 </Link>
      <Link href="blog/images/image-2">Image 2</Link>
    </>
  );
}
