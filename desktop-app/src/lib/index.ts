// place files you want to import through the `$lib` alias in this folder.
import { createClientAPI } from 'api';
import io from 'socket.io-client';

console.log('Connecting to server...');
const socket = io('ws://localhost:3000');

const api = createClientAPI(socket);

export { api };
