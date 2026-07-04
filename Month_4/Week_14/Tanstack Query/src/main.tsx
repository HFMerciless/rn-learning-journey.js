import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
//ToDo:Debugging
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider>
    <App />
      </QueryClientProvider>
  </StrictMode>,
)
