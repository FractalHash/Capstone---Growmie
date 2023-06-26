import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import Button from "../../components/Button"
import './LoginPage.scss';

const LoginPage = ({ onClose }) => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return null;
  }

  const googleSignIn = async () => {
    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar',
        redirectTo: 'http://localhost:3000/calendar',
        queryParams: {
          access_type: "offline",
          prompt: "consent",
          hd: "localhost:8008"
        }
      },
    });
    if (error) {
      alert('Error logging in to Google');
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    document.cookie = 'supabase.auth.token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

  };

  return (
    <>
      {session ? (
        <div className="login__container">
          <div className='login__overlay'>
            <h2 className='login__title'>Welcome to Growmie, You're signed in as {session.user.user_metadata.name}.</h2>
            <div className='login__button-container'>
              <Button onClick={signOut} text={"Sign Out"} />
            </div>
          </div>
        </div>
      ) : (
        <div className="login__container">
          <div className='login__overlay'>
            <p className="login__text">Growmie requires permission to access your Google Calendar to publish growing schedules.</p>
            <div className='login__button-container'>
              <Button onClick={googleSignIn} text={"Sign in With Google"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPage;
