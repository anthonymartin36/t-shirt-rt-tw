import { createRoot } from 'react-dom/client'
import { Auth0Provider  } from '@auth0/auth0-react'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import router from './router'
import React from 'react'
import './src/index.css'

// import * as dotenv from 'dotenv' 
// dotenv.config()

const queryClient = new QueryClient()


document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <Auth0Provider 
    authorizationParams={{ 
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_APP_AUTH0_AUDIENCE
    }}
    domain={import.meta.env.VITE_APP_AUTH0_DOMAIN} 
    clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
    
    >
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
    </Auth0Provider>,
  )
})
