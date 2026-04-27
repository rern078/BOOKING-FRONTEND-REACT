export type SessionUser = {
  id?: number;
  token?: string;
  is_active?: boolean;
  roles?: string[];
  name: string;
  email: string;
};

const STORAGE_KEY = "booknest_session_v1";

export function getSessionUser(): SessionUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as unknown;
    if (
      typeof parsed === "object" &&
      parsed !== null &&
      "name" in parsed &&
      "email" in parsed &&
      typeof (parsed as { name: unknown }).name === "string" &&
      typeof (parsed as { email: unknown }).email === "string"
    ) {
      const p = parsed as {
        id?: number;
        name: string;
        email: string;
        token?: string;
        is_active?: boolean;
        roles?: unknown;
      };
      return {
        id: typeof p.id === "number" ? p.id : undefined,
        name: p.name,
        email: p.email,
        token: typeof p.token === "string" ? p.token : undefined,
        is_active: typeof p.is_active === "boolean" ? p.is_active : undefined,
        roles: Array.isArray(p.roles)
          ? (p.roles.filter((r) => typeof r === "string") as string[])
          : undefined,
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function getSessionToken(): string | null {
  return getSessionUser()?.token ?? null;
}

export function setSessionUser(user: SessionUser) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export async function revokeBackendSession(): Promise<void> {
  const token = getSessionToken();
  if (!token) return;

  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

  await fetch(`${baseUrl}/api/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).catch(() => {});
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}

