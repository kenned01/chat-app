import React from 'react';

const ChatChannel = ({channel = "", username = ""}) => {
  return (
    <section className="chat-title">
      <h3>{channel} - {username}</h3>
    </section>
  );
};

export default ChatChannel;