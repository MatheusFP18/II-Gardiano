
const Categories = ({
  selectedCategoryIndex,
  setSelectedCategoryIndex,
}: {
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: (num: number) => void;
}) => {
  const categories = [
    { id: 0, name: "Entradas" },
    { id: 1, name: "Pratos Principais" },
    { id: 2, name: "Sobremesas" },
    { id: 3, name: "Bebidas" },
  ];

  return (
    <div className="categories">
      <div className="container mx-auto flex flex-col items-center gap-2 mt-9">
        <h1 className="font-serif text-4xl">Menu</h1>
        <div className="sm:hidden w-full overflow-x-auto whitespace-nowrap py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex justify-start gap-6 text-xl font-serif px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`shrink-0 ${
                  category.id === selectedCategoryIndex
                    ? "border-b-2 border-lime-400"
                    : ""
                }`}
                onClick={() => setSelectedCategoryIndex(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex gap-10 text-2xl font-serif mt-9">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${
                category.id === selectedCategoryIndex
                  ? "border-b-2 border-lime-400"
                  : ""
              }`}
              onClick={() => setSelectedCategoryIndex(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
