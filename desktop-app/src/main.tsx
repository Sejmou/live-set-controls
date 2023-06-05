import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { register } from '@tauri-apps/api/globalShortcut';
import { socket } from './server-connection';
import { createClientAPI } from 'websocket-api';

const api = createClientAPI(socket);

await register('CommandOrControl+Alt+P', () => {
  console.log('Shortcut triggered');
  api.startPlayback();
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
