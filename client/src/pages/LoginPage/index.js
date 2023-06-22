import React, { useEffect } from 'react';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';

import './LoginPage.scss';

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
        redirectTo: 'http://localhost:3000/calendar',
      },
    });
    if (error) {
      alert('Error logging in to Google');
    }
    
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };
 

  return (
    <section className="login">
      {session ? (
        <div className="login__container">
          <div className='login__overlay'>
            <h2>Welcome {session.user.user_metadata.name}</h2>
            <button className='login__button' onClick={signOut}>Sign Out</button>
          </div>
            
        </div>
      ) : (
          <div className="login__container">
            <div className='login__overlay'>
              <button className='login__button' onClick={googleSignIn}>Sign in with Google</button>
            </div>  
          </div>
      )}
    </section>
  );
};

export default LoginPage;
