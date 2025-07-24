import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { Provider } from 'react-redux';
import store from './store/store.js';

const querryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={querryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>,
)
