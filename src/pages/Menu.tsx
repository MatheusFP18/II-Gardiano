import Cards from "../components/Cards";
import Categories from "../components/Categories";
import { useState } from "react";


const Menu = () => {
  const [numCategoriaSelecionada, setNumCategoriaSelecionada] = useState(0);

  return (
    <main>
        <Categories  numCategoriaSelecionada={numCategoriaSelecionada} setNumCategoriaSelecionada={setNumCategoriaSelecionada} />
        <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </main>
)
}

export default Menu