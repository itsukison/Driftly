import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import './auth.css'

const supabase = createClient('https://nlmofvuhfjhzdylyxyzf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sbW9mdnVoZmpoemR5bHl4eXpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2MzEwMjksImV4cCI6MjA1ODIwNzAyOX0.rqExxa2ENuyT6dCPfsSfcP08GYwiSOjtfFn78THqXn4')

export default function AuthComponent() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="auth-container">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#404040',
                  brandAccent: '#52525b',
                }
              }
            }
          }}
        />
      ) : (
        <div className="logged-in-message">Logged in!</div>
      )}
    </div>
  )
}