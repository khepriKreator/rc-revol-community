import {
  QueryClientProvider,
    QueryClient
} from '@tanstack/react-query'
import {RouterProvider} from 'react-router-dom';

const queryClient = new QueryClient()
function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={} />
      </QueryClientProvider>
  )
}

export default App
