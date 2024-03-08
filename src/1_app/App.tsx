import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { routerConfig } from '../2_pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerConfig} />
    </QueryClientProvider>
  );
}

export default App;
