"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools
        client={queryClient}
        position="right"
        buttonPosition="bottom-right"
      />
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
