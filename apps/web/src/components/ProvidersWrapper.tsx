'use client'

import { QueryProvider } from '@repo/lib';

export const ProvidersWrapper = ({ children}: { children: React.ReactNode}) => {
  return <QueryProvider>
    {children}
  </QueryProvider>
}