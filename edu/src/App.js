import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import J from './components/routing/routing'

import KL from './components/detailspage'

function App() {
  return (
    <Router>
    <div className="App">
      <J />
    </div></Router>
  );
}

export default App;
