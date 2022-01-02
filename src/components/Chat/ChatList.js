import { useEffect, useState } from 'react';
import UserList from './UserList';

const URL = 'http://localhost:8000';

const ChatList = ({socket, channel}) => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    
    fetch(`${URL}/users/${channel}`)
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(console.warn)

    socket.on('users status', data => {
      setUsers(data)
    })

  }, [socket, channel])

  return (
    <section className="chat-list">
      <header className="mb-4 text-center">
        <h4 className='text-center'>connected to {channel}</h4>
      </header>

      <aside className="users_connected mb-2">
        
        {users.map((elm, i) => <UserList key={i} name={elm.username} />)}

      </aside>
    </section>
  );
};

export default ChatList;