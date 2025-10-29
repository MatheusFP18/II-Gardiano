import { Link } from "react-router-dom";
import home from "../assets/images/Home.png";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="font-serif text-2xl md:text-4xl font-400 mt-2 text-center">
          Bem vindo ao II Giardino
        </h1>
        <div className="relative">
          <img
            src={home}
            alt="Home"
            className="w-full h-full object-cover min-h-[400px] md:min-h-[500px] brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <p className="font-serif text-lg md:text-3xl mb-8 max-w-5xl">
              Desfrute de uma experiência gastronômica inesquecível com a
              autêntica culinária italiana em um ambiente... e acolhedor.
            </p>
            
            <div className="text-center mt-12">
          <Link 
            to="/reserva" 
            className="bg-lime-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-lime-600 transition-colors text-lg font-serif"
          >
            Faça sua reserva
          </Link>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
