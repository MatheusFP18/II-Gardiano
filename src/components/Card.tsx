import type { MenuItem } from "../data/menuData";

const Card = ({ itemCategory }: { itemCategory: MenuItem }) => {
  const { nome, preco, imagem, descricao } = itemCategory;

  return (
    <div className="container mx-auto flex flex-col mt-10 px-2 gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-3 font-serif sm:gap-8">
          <h2 className="text-2xl font-bold sm:text-4xl">{nome}</h2>
          <p className="text-gray-400 sm:text-lg">{descricao}</p>
          <p className="font-sans font-bold sm:text-lg">{preco}</p>
        </div>
        <img src={imagem} alt={nome} className="w-80 h-55 rounded-lg sm:w-100 sm:h-80"/>
    </div>
  );
};

export default Card;
