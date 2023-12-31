import {
  QueryClientProvider,
    QueryClient
} from '@tanstack/react-query'
import {RouterProvider} from 'react-router-dom'
import {routerConfig} from '../2_pages'

const queryClient = new QueryClient()
function App() {
  return (
      <QueryClientProvider client={queryClient}>
            <RouterProvider router={routerConfig}/>
      </QueryClientProvider>
  )
}

export default App
