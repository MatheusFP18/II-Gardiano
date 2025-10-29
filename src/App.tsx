
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home.tsx';
import Menu from './pages/Menu.tsx';
import AboutUs from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import Contact from './components/Contact.tsx';
import Reservation from './pages/Reservation.tsx';

function App() {
  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserva" element={<Reservation />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/contato" element={<Contact />} />
        

      </Routes>
      
      {/* <Footer /> */}
    </>
  )
}

export default App;