import { io } from 'socket.io-client';
import { createClientAPI } from 'websocket-api';
const URL = 'http://localhost:3000';

export const socket = io(URL);
export const api = createClientAPI(socket);
