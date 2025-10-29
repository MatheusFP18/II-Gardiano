// src/components/MenuPreview.tsx
import { Link } from 'react-router-dom';
import MenuItemCard from './Card';
import { pratosPrincipais, sobremesas } from '../data/menuData';

const featuredDish = pratosPrincipais[0];
const featuredDessert = sobremesas[0];

const MenuPreview = () => {
  return (

    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          Destaques do Cardápio
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          
          {featuredDish && (
            <MenuItemCard itemCategory={featuredDish} />
          )}

          {featuredDessert && (
            <MenuItemCard itemCategory={featuredDessert} />
          )}

        </div>

        <div className="text-center mt-12">
          <Link 
            to="/menu" 
            className="bg-lime-500 text-gray-900 font-bold py-3 px-6 rounded-md hover:bg-lime-600 transition-colors text-lg font-serif"
          >
            Ver Cardápio Completo
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default MenuPreview;