import { useState } from 'react'
import { Button, Input, Panel } from 'rsuite';
import WechatIcon from '@rsuite/icons/Wechat';
import { useHistory } from 'react-router-dom';
import './Home.css'
import HomeParticle from './HomeParticle';

const Home = () => {

  const [channel, setChannel] = useState('')
  const [username, setUsername] = useState('')
  const history = useHistory()

  function onConnect(e) {
    e.preventDefault()
    history.push("/chat", {username, channel})
  }

  return (
    <section className="view login">

      <Panel shaded bordered className="login_card" >

        <center className="mb-4">
          <WechatIcon style={{fontSize: "4rem", color: "#3498ff"}} />
        </center>
        
        <form onSubmit={onConnect}>
          <Input required placeholder="CHANNEL" className="mb-4" value={channel} onChange={setChannel} />
          <Input required placeholder="USERNAME" className="mb-4" value={username} onChange={setUsername} />
          <Button appearance="primary" type="submit" block className="mb-4">CONNECT</Button>
        </form>


      </Panel>

      <HomeParticle />
    </section>
  );
};

export default Home;