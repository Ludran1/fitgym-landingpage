import { Card } from "@/components/ui/card";
import gymEquipmentReal from "@/assets/gym-equipment-real.jpg";
import gymCardioReal from "@/assets/gym-cardio-real.jpg";
import gymWeightsReal from "@/assets/gym-weights-real.jpg";
import gymMachine from "@/assets/gym-machine.jpg";
import gymArea from "@/assets/gym-area.jpg";
import gymTraining from "@/assets/gym-training.jpg";

const Gallery = () => {
  const images = [
    {
      src: gymEquipmentReal,
      alt: "Equipamiento moderno de entrenamiento y máquinas multifunción",
      title: "Equipamiento"
    },
    {
      src: gymCardioReal,
      alt: "Área de cardio con cintas de correr y bicicletas estáticas",
      title: "Área de Cardio"
    },
    {
      src: gymWeightsReal,
      alt: "Zona de pesas libres con mancuernas de diversos pesos",
      title: "Zona de Pesas"
    },
    {
      src: gymMachine,
      alt: "Máquinas de entrenamiento de fuerza y prensa",
      title: "Máquinas de Fuerza"
    },
    {
      src: gymArea,
      alt: "Área de entrenamiento funcional con espacio amplio",
      title: "Área Funcional"
    },
    {
      src: gymTraining,
      alt: "Zona de entrenamiento con equipamiento completo",
      title: "Zona de Entrenamiento"
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
