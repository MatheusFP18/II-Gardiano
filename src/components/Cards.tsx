import Card from "./Card";
import { entradas, pratosPrincipais, sobremesas, bebidas, type MenuItem } from "../data/menuData";

const Cards = ({numCategoriaSelecionada}: {numCategoriaSelecionada: number}) => {
    const itemCategories: MenuItem[][] = [entradas, pratosPrincipais, sobremesas, bebidas]
    const selectedCategory: MenuItem[] = itemCategories[numCategoriaSelecionada]

  return (
    <div className="cards">
        {selectedCategory.map((item: MenuItem) => (
            <Card key={item.nome} itemCategory={item} />
        ))}
    </div>
  )
}

export default Cards