import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="https://links.papareact.com/1ui"
        objectFit="contain"
        width="300"
        height="250"
        alt="Google Docs"
      />
      <Button
        className="w-44 mt-10"
        color="blue"
        variant="filled"
        ripple={true}
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
