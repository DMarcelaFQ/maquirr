import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { StrictMode } from 'react';
import { Provider} from "react-redux";
import store from './redux/store.js';
import './index.css';
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store = {store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
