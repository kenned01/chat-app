
import Messages from './Messages';
import ChatForm from './ChatForm';
import ChatChannel from './ChatChannel';
import ChatList from './ChatList';
import { io } from 'socket.io-client';
import './Chat.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { Loader } from 'rsuite';

const Chat = (props) => {

  const socket = useMemo(() => io("http://localhost:8000/", {
    path: '/chat/'
  }), [])

  const history = useHistory()

  const [state] = useState(props.location.state)

  const [loaded, setLoaded] = useState(false)

  const verify = useCallback(() => {

    if(!state) return false

    if(!state?.username || !state?.channel) return false

    return true
  }, [state])

  useEffect(() => {

    function joinRoom() {
      socket.emit('join', state, (response) => {
        setLoaded(true)
      })
      
    }
    
    if (!verify()) {
      history.replace("/")
    }

    joinRoom()

    return () => {
      socket.close()
    }

  }, [socket, history, state, verify])


  if(!verify()) {
    return <></>
  }

  if(!loaded) {
    return <Loader center size='lg' />
  }

  return (
    <section className="view chat">

      <div className="chat-container">
        
        <ChatList socket={socket} channel={state.channel} />
        
        <ChatChannel channel={state.channel} username={state.username} />
        
        <Messages socket={socket} username={state.username} />

        <ChatForm socket={socket} channel={state.channel} username={state.username} />

      </div>

    </section>
  )
}

export default Chat;