import './style/App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Feed from './views/feed';
import Menu from './components/menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact={true} element={<Feed/>}/>
      </Routes>
    <Menu/>
    </Router>
  );
}

export default App;
