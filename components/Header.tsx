import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex h-[120px] justify-between">
      <div className=" flex gap-14">
        <img className="ml-6 h-[120px]" src="logo - Copy.png" alt="logo" />
        <h1 className="m-auto font-[cinzel] text-4xl text-white">KITAAB</h1>
      </div>
      <div className="flex flex-col justify-center gap-4 p-4">
        <Navbar />
        <form>
          <input
            className="ml-2 rounded-sm p-1"
            placeholder="Enter Book Name"
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
