
import { galleryImages, type GalleryImage } from '../data/galleryData'; 

const Gallery = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
        Galeria de Momentos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        
        {galleryImages.map((image: GalleryImage) => (
          <div 
            key={image.id} 
            className="rounded-lg overflow-hidden shadow-md"
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;