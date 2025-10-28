
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import AboutUs from './pages/About.tsx';

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        
      </Routes>
      
      {/* <Footer /> */}
    </>
  )
}

export default App;