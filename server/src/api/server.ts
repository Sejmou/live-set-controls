import type { ClientActions, ClientAction } from './types';
import { Socket } from 'socket.io';

export const setupActionHandlers = (
  socket: Socket,
  handlers: ClientActions
) => {
  socket.on('clientAction', (action: ClientAction) => {
    console.log('Received client action:', action);
    handlers[action.name]();
  });
};
