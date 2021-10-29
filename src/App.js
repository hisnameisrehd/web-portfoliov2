import Profile from './components/Profile';
import { GlobalStyle } from './GlobalStyle';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Home />
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
