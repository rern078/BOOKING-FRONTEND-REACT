"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getSessionUser, setSessionUser } from "../lib/session";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";

export function SignInClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = useMemo(() => {
    const v = searchParams.get("callbackUrl");
    return v && v.startsWith("/") ? v : "/profile";
  }, [searchParams]);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const existing = getSessionUser();
    if (existing) router.replace(callbackUrl);
  }, [callbackUrl, router]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim()) return setError("Email is required.");
    if (!password.trim()) return setError("Password is required.");

    const baseUrl =
      process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

    setSubmitting(true);
    fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email.trim(), password }),
    })
      .then(async (res) => {
        const json = (await res.json().catch(() => null)) as unknown;
        if (!res.ok) {
          const msg =
            json &&
            typeof json === "object" &&
            json !== null &&
            "message" in json &&
            typeof (json as { message?: unknown }).message === "string"
              ? (json as { message: string }).message
              : "Login failed.";
          throw new Error(msg);
        }
        return json as {
          token: string;
          user: {
            id: number;
            name: string;
            email: string;
            is_active: boolean;
            roles?: string[];
          };
        };
      })
      .then((data) => {
        const roles = Array.isArray(data.user.roles)
          ? data.user.roles.filter((r) => typeof r === "string")
          : [];

        setSessionUser({
          id: data.user.id,
          token: data.token,
          email: data.user.email,
          name: data.user.name || name.trim() || data.user.email.split("@")[0],
          is_active: data.user.is_active,
          roles,
        });

        const isAdmin = roles.includes("admin") || data.user.id === 1;
        if (isAdmin) {
          window.location.href = `${baseUrl}/admin/dashboard`;
          return;
        }

        router.push(callbackUrl);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Login failed.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="grid min-h-[calc(100vh-56px)] place-items-center bg-slate-50 px-6 py-10 md:min-h-screen">
      <div className="w-full max-w-[420px]">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            ← Back to home
          </Link>
          <Badge variant="warning">Demo</Badge>
        </div>

        <Card className="rounded-3xl p-6">
          <h1 className="text-2xl font-bold">Sign in</h1>
          <p className="mt-1 text-sm text-slate-600">
            Use your account to view bookings, manage profile, and checkout
            faster.
          </p>

          {error ? (
            <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-800">
              {error}
            </div>
          ) : null}

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <label className="grid gap-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Name (optional)
              </span>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-semibold text-slate-600">Email</span>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                inputMode="email"
                autoComplete="email"
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-semibold text-slate-600">
                Password
              </span>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </label>

            <Button
              type="submit"
              disabled={submitting}
              className="mt-1 rounded-xl bg-slate-900 hover:bg-slate-800 focus-visible:ring-slate-400"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </Button>

            <p className="text-center text-xs text-slate-500">
              This is a frontend-only demo login for now.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}

