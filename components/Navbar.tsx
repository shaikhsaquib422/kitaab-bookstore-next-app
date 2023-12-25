import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <section>
      <nav className="">
        <ul className=" font-display flex flex-row gap-8 text-lg text-white">
          <Link href="/">
            <li className="px-2 font-bold">Home</li>
          </Link>
          <Link href="/">
            <li className="px-2 font-bold">About</li>
          </Link>
          <Link href="/">
            <li className="px-2 font-bold">Register</li>
          </Link>
          <Link href="/">
            <li className="px-2 font-bold">Login</li>
          </Link>
          <Link href="/">
            <li className="px-2 font-bold">Feedback</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
}
