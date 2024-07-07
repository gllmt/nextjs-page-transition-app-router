import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold uppercase font-sans max-w-3xl text-center">
        Contact Page
      </h1>
      <Link className="font-sans mt-10" href="/">
        Link to Home page
      </Link>
    </>
  );
}
