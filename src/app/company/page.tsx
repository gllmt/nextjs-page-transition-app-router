import { TransitionLink } from "@/components/utils/TransitionLink";
import Link from "next/link";
import React from "react";

export default function Company() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-10">
      <nav className="flex gap-4 max-w-3xl border p-4 uppercase">
        <TransitionLink href="/">Home</TransitionLink>
      </nav>
      <h1 className="text-5xl md:text-7xl font-bold uppercase font-sans">
        Company Page
      </h1>
      <Link className="font-sans" href="/">
        Link to Home page not animated
      </Link>
    </main>
  );
}
