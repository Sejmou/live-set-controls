import express, { Request, Response } from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const port = 3000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:1420', // for local development; only allow requests from this address
  },
});

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Socket.io
io.on('connection', socket => {
  console.log('a user connected');
  socket.on('create-something', (msg, callback) => {
    console.log(`received 'create-something' message, content:`, msg);
    callback('something created');
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
