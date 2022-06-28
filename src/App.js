import './style/App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Library from './views/library';
import Map from './views/map';
import Menu from './components/menu';
import Profile from './views/profile';
import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'MV1X3atOq3MlMcS0yWSGCz0yum4SC5rCKaACgaLv';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'PmeztcfiG2GrvqHYzaddh5kJXzIappxCnOj1PULu';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

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
