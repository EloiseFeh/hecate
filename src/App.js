import './style/App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Library from './views/library';
import Map from './views/map';
import Menu from './components/menu';
import Profile from './views/profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Library/>}/>
        <Route path='mapa'  element={<Map/>}/>
        <Route path='perfil'  element={<Profile/>}/>
      </Routes>
    <Menu/>
    </Router>
  );
}

export default App;
