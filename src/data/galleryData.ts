
import imgAmbiente1 from "../assets/images/gallery/Gallery 1.png";
import imgPrato1 from "../assets/images/gallery/Gallery 2.png";
import imgCoquetel1 from "../assets/images/gallery/Gallery 3.png";
import imgAmbiente2 from "../assets/images/gallery/Gallery 4.png";
import imgPrato2 from "../assets/images/gallery/Gallery 5.png";
import imgDetalhe1 from "../assets/images/gallery/Gallery 6.png";


export interface GalleryImage {
  id: number;
  src: string;
  alt: string; 
}


export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: imgAmbiente1,
    alt: "Visão do salão principal do Il Giardino",
  },
  {
    id: 2,
    src: imgPrato1,
    alt: "Prato de massa com frutos do mar",
  },
  {
    id: 3,
    src: imgCoquetel1,
    alt: "Coquetel colorido servido no bar",
  },
  {
    id: 4,
    src: imgAmbiente2,
    alt: "Área externa com mesas ao ar livre",
  },
  {
    id: 5,
    src: imgPrato2,
    alt: "Detalhe de uma sobremesa de chocolate",
  },
  {
    id: 6,
    src: imgDetalhe1,
    alt: "Detalhe da decoração de uma das mesas",
  },
];