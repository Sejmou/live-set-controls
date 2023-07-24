import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import { Ableton } from 'ableton-js';
import { setupActionHandlers } from './api/server';
// TODO: figure out how to import expected "observable Live set state pieces" and "supported actions" of WebSocket API and statically verify if every one of them is implemented

async function main() {
  const app = express();
  const port = 3000;
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: '*', // for local development; only allow requests from this address
    },
  });
  const ableton = new Ableton();

  console.log('Waiting for Ableton Live...');
  await ableton.start();
  console.log('Connected to Ableton Live!');

  io.on('connection', socket => {
    console.log('a client connected');
    setupActionHandlers(socket, {
      startPlayback: () => ableton.song.startPlaying(),
      stopPlayback: () => ableton.song.stopPlaying(),
    });
    socket.on('disconnect', () => {
      console.log('a client disconnected');
    });
  });

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

main();
