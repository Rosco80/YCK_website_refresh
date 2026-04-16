import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except static assets, Next.js internals, and API routes
  matcher: ['/((?!_next|_vercel|api|.*\\..*).*)']
};
