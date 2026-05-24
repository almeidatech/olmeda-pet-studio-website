import type { NextApiRequest, NextApiResponse } from 'next';

const STARTED_AT = Date.now();

type Health = {
  status: 'ok' | 'degraded';
  commit: string;
  uptime_seconds: number;
  supabase_reachable: boolean;
};

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Health>) {
  const commit = process.env.GIT_SHA ?? 'unknown';
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  let supabase_reachable = false;
  if (url) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 1500);
      // Any HTTP response (even 401/404) means the server is alive.
      // Only network errors / timeouts mark it unreachable.
      const r = await fetch(`${url}/auth/v1/health`, { signal: ctrl.signal });
      clearTimeout(timer);
      supabase_reachable = r.status > 0;
    } catch {
      supabase_reachable = false;
    }
  }

  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    status: supabase_reachable ? 'ok' : 'degraded',
    commit,
    uptime_seconds: Math.floor((Date.now() - STARTED_AT) / 1000),
    supabase_reachable,
  });
}
