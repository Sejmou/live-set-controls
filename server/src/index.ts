import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import { Ableton } from 'ableton-js';
// TODO: figure out how to import expected "observable Live set state pieces" and "supported actions" of WebSocket API and statically verify if every one of them is implemented

async function main() {
  const app = express();
  const port = 3000;
  const server = http.createServer(app);
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:1420', // for local development; only allow requests from this address
    },
  });
  const ableton = new Ableton();
  await ableton.start();

  io.on('connection', socket => {
    console.log('a client connected');
    socket.on('startPlayback', () => {
      console.log('startPlayback');
      ableton.song.startPlaying();
    });
    socket.on('stopPlayback', () => {
      console.log('stopPlayback');
      ableton.song.stopPlaying();
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
