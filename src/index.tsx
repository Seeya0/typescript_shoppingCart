import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const provider = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={provider}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
