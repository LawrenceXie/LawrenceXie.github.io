import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Music from './containers/Music';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Music" element={<Music/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
