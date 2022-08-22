/* eslint-disable @next/next/no-img-element */
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import Login from "../../components/Login";
import { database } from "../../firebase";
import { doc } from "firebase/firestore";
import { Button } from "@material-tailwind/react";
import TextEditor from "../../components/TextEditor";

function Doc() {
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loading, error] = useDocument(
    doc(database, "userDocs", session?.user?.email, "docs", id),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  if (!loading && !snapshot?.data().fileName) {
    router.replace("/");
  }

  if (!session) return <Login />;

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")}>
          <i className="material-icons text-blue-500 text-5xl">description</i>
        </span>
        <div className="flex-grow px-2">
          <h2 className="">{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-grey-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          variant="filled"
          rounded="true"
          icononly="false"
          ripple={true}
          size="md"
          className="hidden md:!inline-flex h-10"
        >
          <i className="material-icons">share</i>{" "}
          <p className="leading-[1.25rem] text-md pl-2">SHARE</p>
        </Button>

        <img
          src={session?.user?.image}
          alt=""
          className="rounded-full cursor-pointer h-10 w-10 ml-2"
        />
      </header>
      <div className="max-w-3xl">
        <TextEditor />
      </div>
    </div>
  );
}

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
