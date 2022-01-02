import './assets/App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/chat' component={Chat} exact/>
    </Switch>
  );
}

export default App;
