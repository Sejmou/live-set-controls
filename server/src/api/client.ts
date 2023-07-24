import type { ClientAction, ClientActions } from './types';
import type { Socket } from 'socket.io-client';

const emitClientAction: (socket: Socket, command: ClientAction) => void = (
  socket,
  action
) => {
  socket.emit('clientAction', action);
};

export const createClientAPI: (socket: Socket) => ClientActions = socket => ({
  startPlayback: () => emitClientAction(socket, { name: 'startPlayback' }),
  stopPlayback: () => emitClientAction(socket, { name: 'stopPlayback' }),
});
