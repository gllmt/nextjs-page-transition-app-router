"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-center">
      <nav className="py-8">
        {pathname === "/" ? (
          <ul className="container flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        ) : pathname === "/about" ? (
          <ul className="container flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <p className="text-gray-500">Header About</p>
            </li>
          </ul>
        ) : pathname === "/contact" ? (
          <ul className="container flex gap-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <p className="text-gray-500">Header Contact</p>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
