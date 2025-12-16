import { NextResponse } from 'next/server';

// Redirects /:lang  -> /
export function GET(req: Request, { params }: { params: { lang: string } }) {
  const url = new URL(req.url);
  url.pathname = '/';
  return NextResponse.redirect(url);
}
