export type LoginRole = "student" | "admin";

export type DummyAuthSession = {
  role: LoginRole;
  email: string;
  displayName: string;
  permissions: string[];
  token: string;
  expiresAt: string;
  loginMode: "dummy";
};

type LoginPayload = {
  role: LoginRole;
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  message: string;
  errors?: string[];
  data?: DummyAuthSession;
};

export const dummyCredentials: Record<
  LoginRole,
  { email: string; password: string }
> = {
  student: {
    email: "student@divineacademy.edu.in",
    password: "Student@123",
  },
  admin: {
    email: "admin@divineacademy.edu.in",
    password: "Admin@123",
  },
};

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";
const sessionStorageKey = "diaDummySession";

export async function loginWithDummyAuth(
  payload: LoginPayload,
): Promise<DummyAuthSession> {
  const response = await fetch(`${apiBaseUrl}/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let result: LoginResponse;

  try {
    result = (await response.json()) as LoginResponse;
  } catch {
    throw new Error("Login service returned an invalid response.");
  }

  if (!response.ok || !result.success || !result.data) {
    const message = result.errors?.[0] || result.message || "Login failed.";
    throw new Error(message);
  }

  return result.data;
}

export function persistDummySession(
  session: DummyAuthSession,
  rememberMe: boolean,
) {
  if (typeof window === "undefined") {
    return;
  }

  const storage = rememberMe ? window.localStorage : window.sessionStorage;
  const otherStorage = rememberMe ? window.sessionStorage : window.localStorage;

  otherStorage.removeItem(sessionStorageKey);
  storage.setItem(sessionStorageKey, JSON.stringify(session));
}

export function readDummySession(): DummyAuthSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawSession =
    window.localStorage.getItem(sessionStorageKey) ||
    window.sessionStorage.getItem(sessionStorageKey);

  if (!rawSession) {
    return null;
  }

  try {
    const session = JSON.parse(rawSession) as DummyAuthSession;

    if (session.loginMode !== "dummy") {
      return null;
    }

    return session;
  } catch {
    return null;
  }
}

export function clearDummySession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(sessionStorageKey);
  window.sessionStorage.removeItem(sessionStorageKey);
}