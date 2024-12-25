import React, { useEffect, useState } from 'react';
import socket from '../socket';
import '../App.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = prompt('Enter your name');
    setUserName(name);
    socket.emit('new-user-joined', name);

    socket.on('user-joined', (name) => {
      setMessages((prev) => [...prev, { name, message: `${name} joined the chat`, type: 'notification' }]);
    });

    socket.on('receive', (data) => {
      setMessages((prev) => [...prev, { name: data.name, message: data.message, type: 'received' }]);
    });

    return () => {
      socket.off();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('send', messageInput);
    setMessages((prev) => [...prev, { name: 'You', message: messageInput, type: 'sent' }]);
    setMessageInput('');
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <div className="profile p-2 flex items-center gap-4 h-16 bg-green-900 sticky top-0 z-50 shadow-md">
        <h2 className="text-white text-xl">Chat App</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 max-w-xs md:max-w-md rounded-lg my-3 shadow-lg ${
              msg.type === 'sent' ? 'ml-auto bg-blue-500 text-white' : 
              msg.type === 'received' ? 'mr-auto bg-gray-200 text-black' :
              'text-center text-sm text-gray-500'
            }`}
          >
            <span className="block">{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="w-full sticky bottom-0 bg-emerald-900 p-2 shadow-lg">
        <form onSubmit={sendMessage} className="flex items-center space-x-2">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 p-2 rounded-lg text-black"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="p-2 btn bg-blue-700 text-white rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
