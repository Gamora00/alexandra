import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Options from './pages/options';
import Journey from './pages/journey';
import Music from './pages/music'
import Moments from './pages/moments'
import Message from './pages/message'
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/choices" element={<Options />} />

        <Route path="/journey" element={<Journey />} />
        <Route path="/music" element={<Music />} />
        <Route path="/moments" element={<Moments />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    
  );
}

export default App;
