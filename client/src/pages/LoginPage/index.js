import React from 'react';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

const LoginPage = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <></>;
  }

  const googleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
        redirectTo: 'http://localhost:3000/calendar'
      },
    });

    if (error) {
      alert('Error logging in to Google');
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  console.log(session);

  return (
    <section className="login-page">
      {session ? (
        <>
          <h2>Welcome {session.user.user_metadata.name}</h2>
          <button onClick={signOut}>Sign Out</button>
        </>
      ) : (
        <>
          <button onClick={googleSignIn}>Sign in with Google</button>
        </>
      )}
    </section>
  );
};

export default LoginPage;