import { rewrite } from '@vercel/functions';

export default function middleware(request) {
  const url = new URL(request.url);

  if (url.hostname === 'project-k95.bytcra.com') {
    return rewrite(new URL('/k95' + url.pathname, request.url));
  }
}

export const config = {
  matcher: '/((?!_astro|images|js|favicon).*)',
};