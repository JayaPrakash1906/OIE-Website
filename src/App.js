import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Contact from "./Home/Contact"
import News from './Home/News';
import About from './Home/About';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
