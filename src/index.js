import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Add Mantine imports
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

// Import for React Router
import { router } from "./Router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MantineProvider>
    <RouterProvider router={router} />
  </MantineProvider>
);