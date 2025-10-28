import Card from "./Card";
import { entradas, pratosPrincipais, sobremesas, bebidas, type MenuItem } from "../data/menuData";

const Cards = ({numCategoriaSelecionada}: {numCategoriaSelecionada: number}) => {
    const itemsCategory: MenuItem[][] = [entradas, pratosPrincipais, sobremesas, bebidas]
    const categorySelect: MenuItem[] = itemsCategory[numCategoriaSelecionada]

  return (
    <div className="cards">
        {categorySelect.map((item: MenuItem) => (
            <Card key={item.nome} itemCategory={item} />
        ))}
    </div>
  )
}

export default Cards