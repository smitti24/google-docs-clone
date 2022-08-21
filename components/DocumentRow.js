import React from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";

function DocumentRow({ fileName, id, date }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-grey-100 cursor-pointer"
    >
      <i className="material-icons text-blue-500 text-3xl">article</i>
      <p className="flex-grow pl-5 w-10 pr-10 truncate font-bold">{fileName}</p>
      <p className="pr-5 text-sm font-bold">
        {date?.toDate().toLocaleDateString()}
      </p>
      <Button
        color="grey"
        variant="outlined"
        ripple={true}
        className="border-0"
      >
        <i className="material-icons cursor-pointer">more_vert</i>
      </Button>
    </div>
  );
}

export default DocumentRow;
