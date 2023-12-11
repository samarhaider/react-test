import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from "@testing-library/react";

import { fetchProducts, useGetProducts } from "../useGetProduct";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
})
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

test("useProducts", async () => {
  await fetchProducts();
  const { result } = renderHook(() => useGetProducts(), { wrapper })

  // ✅ return a Promise via expect to waitFor
  await waitFor(() => expect(result.current.isSuccess).toBe(true))

  expect(result.current.data).toBeDefined()
});