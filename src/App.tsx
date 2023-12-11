import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ProductsPage from './pages/products/ProductsPage'
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  )
}

export default App
