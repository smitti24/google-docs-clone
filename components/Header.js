import React from "react";
import { Button } from "@material-tailwind/react";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="grey"
        variant="outlined"
        rounded={true}
        iconOnly={true}
        ripple={true}
        className="hidden md:inline-flex border-0 rounded-full"
      >
        <i className="material-icons text-3xl">menu</i>
      </Button>
      <i className="material-icons text-blue-500 text-5xl">description</i>
      <h1 className="hidden md:inline-flex ml-2 text-grey-700 text-2xl">
        Docs
      </h1>
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-grey-100 text-grey-600 rounded-lg focus-within:text-grey-800 focus-within:shadow-md">
        <i className="material-icons text-3xl text-grey-600">search</i>
        <input
          className="flex-grow text-base bg-transparent px-5 outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <Button
        color="grey"
        variant="outlined"
        rounded={true}
        iconOnly={true}
        ripple={true}
        className="hidden md:inline-flex border-0 rounded-full ml-5 md:ml-20"
      >
        <i className="material-icons text-3xl">apps</i>
      </Button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
        src="/images/logo.png"
        alt=""
      />
    </header>
  );
}

export default Header;
