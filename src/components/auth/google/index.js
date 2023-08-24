'use client';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { updateUserLogin, generateToken } from '../api';
import UserContext from '@/context/AuthProvider';

export default function Component({ className }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { updateAuth } = useContext(UserContext);

  useEffect(() => {
    if (session?.user) {
      const { user } = session;
      const token = generateToken(user);
      updateUserLogin(user, token)
        .then((response) => {
          updateAuth({
            user: response.user,
            token: response.token,
            isSignedIn: response.isSignedIn,
          });

          router.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [session]);

  return (
    <button className={className} onClick={() => signIn('google')}>
      <Image
        src={`/img/googleLogin.svg`}
        width="36"
        height="36"
        alt="coin"
        title="coin"
      />
      <span>Login</span>
    </button>
  );
}
