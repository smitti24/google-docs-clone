import React from "react";
import { Button } from "@material-tailwind/react";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
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
      <div className="flex flex-grow items-center px-5 py-2 bg-grey-100">
        <i className="material-icons text-3xl text-grey-900">search</i>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Header;
