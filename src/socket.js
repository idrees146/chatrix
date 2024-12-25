import { io } from 'socket.io-client';

// Connect to the backend socket server
const socket = io('https://lackadaisical-elemental-success.glitch.me');

export default socket;

