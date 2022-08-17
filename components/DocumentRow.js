import React from "react";

function DocumentRow({ fileName, id, date }) {
  return (
    <div>
      <p>{fileName}</p>
      <p>{date?.toDate().toLocaleDateString()}</p>
    </div>
  );
}

export default DocumentRow;
