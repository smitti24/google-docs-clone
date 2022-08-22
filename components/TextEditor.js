import React, { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
import { EditorState } from "draft-js";
import { database } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { convertFromRaw, convertToRaw } from "draft-js";
import { useDocument } from "react-firebase-hooks/firestore";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

function TextEditor() {
  const { data: session } = useSession();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const router = useRouter();
  const { id } = router.query;

  const [snapshot, loading, error] = useDocument(
    doc(database, "userDocs", session?.user?.email, "docs", id),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      const editorValue = snapshot?.data()?.editorState;
      console.log(editorValue);

      let newEditorState = EditorState.push(
        editorState,
        convertFromRaw(snapshot?.data()?.editorState),
        "insert-characters"
      );
      setEditorState(newEditorState);
    }
  }, [snapshot, editorState]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);

    const docRef = doc(database, "userDocs", session?.user?.email, "docs", id);

    setDoc(
      docRef,
      { editorState: convertToRaw(editorState.getCurrentContent()) },
      { merge: true }
    )
      .then((docRef) => {
        console.log(docRef);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      <h1>
        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
          editorClassName="mt-6 p-10 bg-white shadow-lg max-w-4xl mx-auto mb-12"
        />
      </h1>
    </div>
  );
}

export default TextEditor;
