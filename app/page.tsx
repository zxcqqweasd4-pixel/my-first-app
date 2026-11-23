import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Hello, my name is Rachel Jasmin Omus</h1>
      <p>
        I live in Pooc Oriental, Tubigon, Bohol. I love playing online games.
      </p>
      <Link href="/projects">See my projects</Link>
    </main>
  );
}