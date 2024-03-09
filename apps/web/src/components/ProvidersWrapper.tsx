'use client';

import { QueryProvider } from '@repo/lib';
import { ReactNode } from 'react';

export const ProvidersWrapper = ({ children }: { children: ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};
