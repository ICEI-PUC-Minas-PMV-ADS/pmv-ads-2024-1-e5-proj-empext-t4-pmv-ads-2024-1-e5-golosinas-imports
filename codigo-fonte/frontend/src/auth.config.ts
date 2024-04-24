import type { NextAuthConfig } from 'next-auth';
const { AUTH_SECRET } = process.env;
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Redirects the user back to the login page if not authenticated
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/perfil');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/perfil', nextUrl));
      }
      return true;
    },
  },
  providers: [],
  secret: AUTH_SECRET,
} satisfies NextAuthConfig;