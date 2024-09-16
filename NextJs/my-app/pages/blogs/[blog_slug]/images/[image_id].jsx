import { useRouter } from "next/router";
import React from "react";

export default function image_id() {
  const route = useRouter();
  const { blog_slug, image_id } = route.query;

  return (
    <>
      <h1>
        This is my {blog_slug} and this {image_id} is my Image Id
      </h1>
    </>
  );
}
