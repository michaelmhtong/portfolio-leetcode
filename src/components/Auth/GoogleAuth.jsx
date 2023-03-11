import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const GoogleAuth = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>id: {session.user.id}</p>
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};

export default GoogleAuth;