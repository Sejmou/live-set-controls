import { Command, StartPlaybackCommand } from './types';
import type { Socket } from 'socket.io-client';

export type ClientAPI = {
  startPlayback: () => void;
  stopPlayback: () => void;
};

const emitClientCommand: (socket: Socket, command: Command) => void = (
  socket,
  command
) => {
  const { name, ...rest } = command;
  socket.emit(name, rest);
};

const startPlaybackCommand: StartPlaybackCommand = {
  name: 'startPlayback',
};
export const startPlayback: (socket: Socket) => void = socket => {
  emitClientCommand(socket, startPlaybackCommand);
};

const stopPlaybackCommand: Command = {
  name: 'stopPlayback',
};
export const stopPlayback: (socket: Socket) => void = socket => {
  emitClientCommand(socket, stopPlaybackCommand);
};

export const createClientAPI: (socket: Socket) => ClientAPI = socket => ({
  startPlayback: () => startPlayback(socket),
  stopPlayback: () => stopPlayback(socket),
});
