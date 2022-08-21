import React from "react";
import DocumentRow from "./DocumentRow";

function MyDocuments({ data }) {
  return (
    <>
      <div className="flex items-center justify-between pb-5 ">
        <h2 className="font-medium flex-grow">My Documents</h2>
        <p className="mr-12">Date Created</p>
        <i className="material-icons text-3xl text-grey-500">folder</i>
      </div>
      <div className="flex-row">
        {data?.map((doc) => (
          <>
            <DocumentRow
              key={doc.id}
              fileName={doc.data().fileName}
              id={doc.id}
              date={doc.data().timestamp}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default MyDocuments;
