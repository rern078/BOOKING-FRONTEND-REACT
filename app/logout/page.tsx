"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { clearSession, revokeBackendSession } from "../lib/session";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    void (async () => {
      await revokeBackendSession();
      clearSession();
      router.replace("/");
    })();
  }, [router]);

  return (
    <div className="min-h-[calc(100vh-0px)] bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-100">
        <div className="text-lg font-semibold">Signing out…</div>
        <div className="mt-2 text-sm text-slate-600">Redirecting to home.</div>
      </div>
    </div>
  );
}

