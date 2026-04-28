"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { clearSession, revokeBackendSession } from "../lib/session";
import { useSessionUser } from "../hooks/useSessionUser";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export default function ProfilePage() {
  const router = useRouter();
  const { user, ready } = useSessionUser();

  useEffect(() => {
    if (ready && !user) router.replace("/signin?callbackUrl=/profile");
  }, [ready, router, user]);

  useEffect(() => {
    if (!ready || !user?.token) return;
    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

    fetch(`${baseUrl}/api/me`, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load profile.");
        return (await res.json()) as {
          user: { name: string; email: string; is_active: boolean };
        };
      })
      .then((data) => {
        // keep existing session but refresh is_active display by overwriting session
        // via storage event (simple approach)
        window.localStorage.setItem(
          "booknest_session_v1",
          JSON.stringify({ ...user, ...data.user })
        );
      })
      .catch(() => {});
  }, [ready, user]);

  return (
    <div className="px-6 py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto w-full w-100">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Back to home
          </Link>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              void (async () => {
                await revokeBackendSession();
                clearSession();
                router.push("/");
              })();
            }}
            type="button"
          >
            Logout
          </Button>
        </div>

        <Card className="rounded-3xl p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold">Profiles</h1>
              <p className="mt-1 text-sm text-slate-600">
                Your account details (frontend template).
              </p>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-900 text-white">
              <span className="text-lg font-semibold">
                {user?.name?.slice(0, 1).toUpperCase() ?? "U"}
              </span>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-xs font-semibold text-slate-500">Name</div>
              <div className="mt-1 font-semibold">{ready ? user?.name ?? "-" : "…"}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5">
              <div className="text-xs font-semibold text-slate-500">Email</div>
              <div className="mt-1 font-semibold">{ready ? user?.email ?? "-" : "…"}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-5 md:col-span-2">
              <div className="text-xs font-semibold text-slate-500">Status</div>
              <div className="mt-2">
                {ready ? (
                  user?.is_active === false ? (
                    <Badge variant="danger">Disabled</Badge>
                  ) : (
                    <Badge variant="success">Active</Badge>
                  )
                ) : (
                  <span className="text-sm font-semibold">…</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm font-semibold">Next step</div>
            <p className="mt-1 text-sm text-slate-600">
              When your backend API is ready, we’ll replace this demo session with real login and fetch the profile
              from the server.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="inline-flex"
              >
                <Button>Browse stays</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
}

