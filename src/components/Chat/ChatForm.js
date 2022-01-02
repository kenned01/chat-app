import { IconButton, Input } from 'rsuite';
import SendIcon from '@rsuite/icons/Send';
import { useState } from 'react';

/* 
 1- sokect to send message
*/
const ChatForm = ({socket, channel}) => {

  const [message, setMessage] = useState("");

  function onSend() {
    socket.emit('chat message', {
      room_id: channel,
      message: message
    })

    setMessage('')
  }

  
  return (
    <section className="chat-form">
      <Input className="chat_input" value={message} onChange={msg => setMessage(msg)} />
      <IconButton className="chat_input_button" icon={<SendIcon />} appearance="primary" onClick={onSend}/>
    </section>
  );
};

export default ChatForm;