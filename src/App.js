import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import MiraclesList from './pages/MiraclesList';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/miracles-list' element={<MiraclesList />}/>
      </Routes>
    <Navbar />
    </Router>
    </>
  );
}

export default App;
