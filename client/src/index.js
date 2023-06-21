import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  'https://owedqutkezhuovcpdabu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93ZWRxdXRrZXpodW92Y3BkYWJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxODk2NTcsImV4cCI6MjAwMjc2NTY1N30.mXUrFjnjmU_uemhw9OTkHHWYAnA2SGFQy00-4y_FnBo'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient = {supabase}>
      <App />
    </SessionContextProvider>  
  </React.StrictMode>
);
