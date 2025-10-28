
import bruschettaClassicaImg from "../assets/images/entradas/Bruschetta Clássica.png";
import saladaCapreseImg from "../assets/images/entradas/Salada Caprese.png";
import aranciniDiRisoImg from "../assets/images/entradas/Arancini di Riso.png";

import spaghettiCarbonaraImg from "../assets/images/pratosPrincipais/Spaghetti alla Carbonara.png"; 
import risotoCogumelosTrufadoImg from "../assets/images/pratosPrincipais/Risoto de Cogumelos Trufado.png";
import lasagnaBologneseImg from "../assets/images/pratosPrincipais/Lasagna alla Bolognese.png";
import ossobucoPolentaImg from "../assets/images/pratosPrincipais/Ossobuco com Polenta.png";

import tiramisuImg from "../assets/images/sobremesas/Tiramisù.png"; 
import pannaCottaImg from "../assets/images/sobremesas/Panna Cotta.png";
import cannoliSicilianoImg from "../assets/images/sobremesas/Cannoli Siciliano.png";

import aperolSpritzImg from "../assets/images/bebidas/Aperol Spritz.png"; 
import vinhoTintoImg from "../assets/images/bebidas/Vinho Tinto.png";
import aguaSanPellegrinoImg from "../assets/images/bebidas/Água San Pellegrino.png";



export interface MenuItem {
  nome: string;
  descricao: string;
  preco: string; 
  imagem: string; 
}


const bruschettaClassica: MenuItem = {
  nome: "Bruschetta Clássica",
  descricao: "Pão italiano tostado com tomates frescos, manjericão, alho e azeite de oliva extra virgem.",
  preco: "R$ 25,00",
  imagem: bruschettaClassicaImg
};

const saladaCaprese: MenuItem = {
  nome: "Salada Caprese",
  descricao: "Tomates maduros, mussarela de búfala fresca, manjericão e um fio de redução de balsâmico.",
  preco: "R$ 32,00",
  imagem: saladaCapreseImg
};

const aranciniDiRiso: MenuItem = {
  nome: "Arancini di Riso",
  descricao: "Bolinhos de risoto recheados com queijo e carne, fritos até ficarem dourados e crocantes.",
  preco: "R$ 28,50",
  imagem: aranciniDiRisoImg
};

const spaghettiCarbonara: MenuItem = {
  nome: "Spaghetti alla Carbonara",
  descricao: "Massa italiana com pancetta, ovos, queijo Pecorino Romano e pimenta preta.",
  preco: "R$ 48,00",
  imagem: spaghettiCarbonaraImg
};

const risotoCogumelosTrufado: MenuItem = {
  nome: "Risoto de Cogumelos Trufado",
  descricao: "Arroz arbóreo cremoso com mix de cogumelos selvagens e um toque final de azeite trufado.",
  preco: "R$ 55,00",
  imagem: risotoCogumelosTrufadoImg
};

const lasagnaBolognese: MenuItem = {
  nome: "Lasagna alla Bolognese",
  descricao: "Camadas de massa fresca, molho bolonhesa rico e molho béchamel, gratinado com parmesão.",
  preco: "R$ 52,00",
  imagem: lasagnaBologneseImg
};

const ossobucoPolenta: MenuItem = {
  nome: "Ossobuco com Polenta",
  descricao: "Vitela cozida lentamente em molho de vinho e vegetais, servida com polenta cremosa.",
  preco: "R$ 65,00",
  imagem: ossobucoPolentaImg
};

const tiramisu: MenuItem = {
  nome: "Tiramisù",
  descricao: "Camadas de biscoito champagne embebidas em café, intercaladas com creme de mascarpone.",
  preco: "R$ 26,00",
  imagem: tiramisuImg
};

const pannaCotta: MenuItem = {
  nome: "Panna Cotta",
  descricao: "Creme de baunilha cozido, servido com uma calda refrescante de frutas vermelhas.",
  preco: "R$ 24,00",
  imagem: pannaCottaImg
};

const cannoliSiciliano: MenuItem = {
  nome: "Cannoli Siciliano",
  descricao: "Massa frita crocante recheada com creme de ricota doce e gotas de chocolate.",
  preco: "R$ 22,00",
  imagem: cannoliSicilianoImg
};

const aperolSpritz: MenuItem = {
  nome: "Aperol Spritz",
  descricao: "O coquetel italiano clássico com Aperol, Prosecco e água com gás.",
  preco: "R$ 30,00",
  imagem: aperolSpritzImg
};

const vinhoTinto: MenuItem = {
  nome: "Vinho Tinto (Taça)",
  descricao: "Seleção da casa de Chianti Clássico D.O.C.G.",
  preco: "R$ 28,00",
  imagem: vinhoTintoImg
};

const aguaSanPellegrino: MenuItem = {
  nome: "Água San Pellegrino",
  descricao: "Água mineral italiana com gás (500ml).",
  preco: "R$ 10,00",
  imagem: aguaSanPellegrinoImg
};


export const entradas: MenuItem[] = [
  bruschettaClassica,
  saladaCaprese,
  aranciniDiRiso
];

export const pratosPrincipais: MenuItem[] = [
  spaghettiCarbonara,
  risotoCogumelosTrufado,
  lasagnaBolognese,
  ossobucoPolenta
];

export const sobremesas: MenuItem[] = [
  tiramisu,
  pannaCotta,
  cannoliSiciliano
];

export const bebidas: MenuItem[] = [
  aperolSpritz,
  vinhoTinto,
  aguaSanPellegrino
];

export const fullMenu: {
  entradas: MenuItem[];
  pratosPrincipais: MenuItem[];
  sobremesas: MenuItem[];
  bebidas: MenuItem[];
} = {
  entradas: entradas,
  pratosPrincipais: pratosPrincipais,
  sobremesas: sobremesas,
  bebidas: bebidas,
};