import './App.css';
import Main from './components/Main';
import Flowmap from './components/Flowmap';
import Nav from './components/Nav';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <Flowmap />
      <Analytics />
    </div>
  );
}

export default App;
