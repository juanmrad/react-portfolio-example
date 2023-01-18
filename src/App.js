import ColorPalette from './components/ColorPalette'
import Home from './components/Home';
import MemoryGame from './components/MemoryGame';
import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/memory-game'>Memory Game</Link>
          <Link to='/color-palette'>Color Palette</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/color-palette" element={<ColorPalette />} />
      </Routes>
    </Router>
  );
}

export default App;
