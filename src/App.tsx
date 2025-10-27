
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';

// --- Páginas ---
import Home from './pages/Home.tsx';
import About from './components/About.tsx';

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        
      </Routes>
      
      {/* <Footer /> */}
    </>
  )
}

export default App;