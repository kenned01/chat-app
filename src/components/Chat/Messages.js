import { useState, useEffect } from 'react';

const Messages = ({socket, username}) => {

  const [messages, setMessages] = useState([])

  useEffect(() => {

    socket.on('chat message', data => {
      setMessages(prev => [...prev, data] )
    })

    return () => {
      socket.off('chat message')
    }

  }, [socket])

  return (
    <section className="message-list">
      
            
      {messages.map((msg, i) => {

        var mine = (msg.sender === socket.id) ? "mine" : "";

        return (
          <div className={"message-container " + mine} key={i}>
            <div className={"message " + mine}>
              <p className="mb-2"><span>{username}</span></p>
              {msg.message}
            </div>
          </div>
        )
      })}


    </section>
  );
};

export default Messages;