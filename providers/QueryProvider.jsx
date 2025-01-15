"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const QueryProvider = ({ children }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
