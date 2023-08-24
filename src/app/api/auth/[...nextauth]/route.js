import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '1084991661541-5c175c0bl50ivtbc641ik8mj65koi5cv.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
    // async redirect({ url, baseUrl }) {
    //   console.log(url, baseUrl);

    //   // Allows relative callback URLs
    //   if (url.startsWith('/')) return `${baseUrl}${url}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
  },
});

export { handler as GET, handler as POST };
