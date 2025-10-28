import { Card } from "@/components/ui/card";
import gymHero from "@/assets/gym-hero.jpg";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymWeights from "@/assets/gym-weights.jpg";
import gymCardio from "@/assets/gym-cardio.jpg";
import gymClass from "@/assets/gym-class.jpg";
import gymFacilities from "@/assets/gym-facilities.jpg";

const Gallery = () => {
  const images = [
    {
      src: gymHero,
      alt: "Instalaciones principales del gimnasio",
      title: "Área Principal"
    },
    {
      src: gymEquipment,
      alt: "Equipamiento moderno de entrenamiento",
      title: "Equipamiento"
    },
    {
      src: gymWeights,
      alt: "Zona de pesas y entrenamiento de fuerza",
      title: "Zona de Pesas"
    },
    {
      src: gymCardio,
      alt: "Área de cardio con equipamiento moderno",
      title: "Área de Cardio"
    },
    {
      src: gymClass,
      alt: "Clases grupales en nuestro estudio",
      title: "Clases Grupales"
    },
    {
      src: gymFacilities,
      alt: "Instalaciones y vestidores del gimnasio",
      title: "Instalaciones"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nuestras Instalaciones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestro gimnasio equipado con la última tecnología y espacios diseñados para tu comodidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
