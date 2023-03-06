import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { GrayApp } from './sections/App';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/gray',
    element: <GrayApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
