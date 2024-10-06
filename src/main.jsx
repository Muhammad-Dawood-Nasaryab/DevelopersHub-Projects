import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from'react-redux';
import { store } from './state/store';
import { ThemeProvider } from './context/themeContext.jsx';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
