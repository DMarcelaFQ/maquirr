import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from './context/UsersContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <UsersProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </UsersProvider>
    </StrictMode>
)
