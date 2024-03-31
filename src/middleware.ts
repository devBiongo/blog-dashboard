/** @format */
import { NextResponse } from 'next/server';
import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';

// See https://clerk.com/docs/references/nextjs/auth-middleware
export default authMiddleware({
    publicRoutes: (req: Request) => {
        if (req.url.includes('/control')) {
            return false;
        }
        if (req.url.includes('/api')) {
            if (req.url.includes('/api/image')) {
                return true;
            }
            return false;
        }
        return true;
    },
});

export const config = {
    matcher: [
        // Exclude files with a "." followed by an extension, which are typically static files.
        // Exclude files in the _next directory, which are Next.js internals.
        '/((?!.+\\.[\\w]+$|_next).*)',
        // Re-include any files in the api or trpc folders that might have an extension
        '/(api|trpc)(.*)',
    ],
};
