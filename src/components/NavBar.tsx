import { useState } from "react";
import logo from "../assets/images/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-b-rose-200 font-serif">
      <div className="container mx-auto flex justify-around items-center py-2">
        <Link to='/'>
          <img src={logo} alt="Logo" className="h-5 w-27" />
        </Link>
        <div className="flex sm:hidden">
          <button onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu size={18} />
          </button>
        </div>
        <nav className="hidden items-center sm:flex">
          <ul className="flex gap-x-8">
            <li className="cursor-pointer hover:text-lime-400"><Link to="/sobre">Sobre Nós</Link></li>
            <li className="cursor-pointer hover:text-lime-400"><Link to="/menu">Menu</Link></li>
            <li className="cursor-pointer hover:text-lime-400"><Link to="/galeria">Galeria</Link></li>
            <li className="cursor-pointer hover:text-lime-400"><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center sm:hidden">
          <button className="absolute top-18" onClick={() => setIsOpen(false)}>
            <IoIosClose size={28} />
          </button>
          <nav>
            <ul className="flex flex-col items-center gap-y-2">
              <button
                className="cursor-pointer hover:text-lime-400 border-b-2 border-b-lime-300"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/sobre">Sobre Nós</Link>
              </button>
              <button
                className="cursor-pointer hover:text-lime-400 border-b-2 border-b-lime-300"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/menu">Menu</Link>
              </button>
              <button className="cursor-pointer hover:text-lime-400 border-b-2 border-b-lime-300" onClick={() => setIsOpen(false)}><Link to="/galeria">Galeria</Link></button>
              <button className="cursor-pointer hover:text-lime-400 border-b-2 border-b-lime-300" onClick={() => setIsOpen(false)}><Link to="/contato">Contato</Link></button>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
