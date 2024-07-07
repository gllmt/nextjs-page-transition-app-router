import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl md:text-7xl font-bold uppercase font-sans max-w-3xl text-center">
        Page Transitions Home Page
      </h1>
      <Link className="font-sans mt-10" href="/about">
        Link to About page
      </Link>
    </>
  );
}
