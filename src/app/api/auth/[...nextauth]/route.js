import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        '1084991661541-5c175c0bl50ivtbc641ik8mj65koi5cv.apps.googleusercontent.com',
      clientSecret: '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',
    }),

    // GoogleProvider({
    //   clientId:
    //     '642956286698-e0vmvj5417iar00j9aj08f428n4ncke9.apps.googleusercontent.com',
    //   clientSecret: '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',
    // }),
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
  },
});

export { handler as GET, handler as POST };
