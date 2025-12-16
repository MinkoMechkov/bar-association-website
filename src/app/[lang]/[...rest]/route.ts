import { NextResponse } from 'next/server';

// Redirects /:lang/...rest -> /...rest (strips the first language segment)
export function GET(req: Request, { params }: { params: { rest: string[] } }) {
  const { rest } = params;
  const url = new URL(req.url);
  const path = rest && rest.length ? `/${rest.join('/')}` : '/';
  url.pathname = path;
  return NextResponse.redirect(url);
}
