// Lightweight cookie helpers for client-side usage
// Note: These run in the browser only

export type CookieAttributes = {
  path?: string;
  domain?: string;
  maxAgeDays?: number; // convenience in days
  secure?: boolean;
  sameSite?: "Lax" | "Strict" | "None";
};

export function setCookie(name: string, value: string, attrs: CookieAttributes = {}): void {
  if (typeof document === "undefined") return;
  const segments: string[] = [];
  segments.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  if (attrs.maxAgeDays && Number.isFinite(attrs.maxAgeDays)) {
    const maxAgeSeconds = Math.floor(attrs.maxAgeDays * 24 * 60 * 60);
    segments.push(`Max-Age=${maxAgeSeconds}`);
    const expires = new Date(Date.now() + maxAgeSeconds * 1000).toUTCString();
    segments.push(`Expires=${expires}`);
  }
  segments.push(`Path=${attrs.path ?? "/"}`);
  if (attrs.domain) segments.push(`Domain=${attrs.domain}`);
  segments.push(`SameSite=${attrs.sameSite ?? "Lax"}`);
  if (attrs.secure ?? true) segments.push("Secure");
  document.cookie = segments.join("; ");
}

export function getCookie(name: string): string | undefined {
  if (typeof document === "undefined") return undefined;
  const cookies = document.cookie ? document.cookie.split(/;\s*/g) : [];
  for (const pair of cookies) {
    const [rawKey, ...rest] = pair.split("=");
    const key = decodeURIComponent(rawKey);
    if (key === name) return decodeURIComponent(rest.join("="));
  }
  return undefined;
}

export function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${encodeURIComponent(name)}=; Max-Age=0; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
}


