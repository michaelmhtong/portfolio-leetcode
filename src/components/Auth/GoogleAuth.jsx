import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "../Button/Button";

const GoogleAuth = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <span className="pr-6 text-sm font-semibold leading-6 text-gray-900">
            Welcome, {session.user.name}
          </span>
          <Button onClick={() => signOut()}>Sign out</Button>
        </>
      ) : (
        <Button onClick={() => signIn()}>Get started</Button>
      )}
    </div>
  );
};

export default GoogleAuth;
