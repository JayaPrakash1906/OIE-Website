import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home";
import Contact from "./Home/Contact"
import News from './Home/News';
import About from './Home/About';
import Ms_Entrepreneurship from './Home/MS_Entrepreneurship_home';
import Ms_Entrepreneurship_selection from './Home/MS_Entrepreneurship_selection';
import Ms_Entrepreneurship_Submitpreferences from './Home/MS_Submitpreferences';
import Ms_Entrepreneurship_Resources from './Home/MS_Entrep_Resources';
import Ms_Entrep_Programme from './Home/Ms_Entrep_Programme';
import Ugfir from './Home/Ugfir_home';
import Pgfir from './Home/Pgfir_home';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News /> } />
          <Route path="/ms_entrepreneurship/home" element={< Ms_Entrepreneurship/>} />
          <Route path="/ms_entrepreneurship/selection-list" element={<Ms_Entrepreneurship_selection />} />
          <Route path="/submit-preferences" element={<Ms_Entrepreneurship_Submitpreferences />} />
          <Route path="/resources" element={<Ms_Entrepreneurship_Resources />} />
          <Route path="/programme-structure" element={< Ms_Entrep_Programme/>} />
          <Route path="/ugfir/home" element={< Ugfir/>} />
          <Route path="/pgfir/home" element={< Pgfir/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
