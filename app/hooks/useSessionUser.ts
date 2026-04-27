"use client";

import { useEffect, useState } from "react";
import { getSessionUser, type SessionUser } from "../lib/session";

export function useSessionUser() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      setUser(getSessionUser());
      setReady(true);
    };

    sync();
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  return { user, ready };
}

