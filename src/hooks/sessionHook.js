import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function useSessionHook() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    async function getSessionData() {
      const session = await getSession();
      setSession(session);
    }
    getSessionData();
  }, []);

  return session;
}
