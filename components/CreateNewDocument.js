import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

function CreateNewDocument() {
  return (
    <div>
      <div className="flex items-center justify-between py-6 text-grey-700">
        <h2 className="text-grey-700 text-lg">Start a new Document</h2>
        <Button
          color="grey"
          variant="outlined"
          ripple={true}
          className="border-0"
        >
          <i className="material-icons cursor-pointer">more_vert</i>
        </Button>
      </div>
      <div className="">
        <div className="relative h-52 w-40 border-2 border-grey-200 cursor-pointer hover:border-blue-700">
          <Image src="https://links.papareact.com/pju" layout="fill" alt="" />
        </div>

        <p className="ml-2 mt-2 font-semibold text-sm text-grey-700">Blank</p>
      </div>
    </div>
  );
}

export default CreateNewDocument;
