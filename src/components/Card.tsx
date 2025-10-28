import type { MenuItem } from "../data/menuData";

const Card = ({ itemCategory }: { itemCategory: MenuItem }) => {
  const { nome, preco, imagem, descricao } = itemCategory;

  return (
    <div className="container mx-auto grid sm:grid-cols-2 gap-6 sm:gap-8 items-center mt-10 px-2">
        <div className="flex flex-col gap-3 font-serif order-2 sm:order-1">
          <h2 className="text-2xl font-bold sm:text-4xl">{nome}</h2>
          <p className="text-gray-400 sm:text-lg">{descricao}</p>
          <p className="font-sans font-bold sm:text-lg">{preco}</p>
        </div>
        <img src={imagem} alt={nome} className="w-full h-56 sm:h-64 object-cover rounded-lg order-1 sm:order-2"/>
    </div>
  );
};

export default Card;
