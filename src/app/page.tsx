import { TransitionLink } from "@/components/utils/TransitionLink";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-10">
      <nav className="flex gap-4 max-w-3xl border p-4 uppercase">
        <TransitionLink href="/about">About</TransitionLink>
        <TransitionLink href="/company">Company</TransitionLink>
      </nav>
      <h1 className="text-5xl md:text-7xl font-bold uppercase font-sans">
        Home Page
      </h1>
      <Link className="font-sans" href="/about">
        Link to About page not animated
      </Link>
    </main>
  );
}
