import Genre from "@/components/Genre";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-red-500">
      <h1>Bookstore App</h1>
      <Genre />

      <Link href="/about">This is a Link to the about page</Link>
    </main>
  );
}
