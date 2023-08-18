"use client";
import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../request/api";

export function ReactQueryClientProvider({ children }: any) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
