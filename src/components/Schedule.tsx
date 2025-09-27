import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, MapPin } from "lucide-react";
import equipmentImage from "@/assets/gym-equipment.jpg";

const Schedule = () => {
  const scheduleData = [
    {
      days: "Lunes - Sábado",
      hours: "8:00 AM - 10:00 PM", 
      description: "Horario completo con todos los servicios disponibles"
    },
    {
      days: "Domingo",
      hours: "8:00 AM - 12:00 PM",
      description: "Horario especial de fin de semana"
    }
  ];

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-fitgym-dark mb-6">
            Horarios de <span className="text-fitgym-orange">Atención</span>
          </h2>
          <p className="text-xl text-fitgym-gray max-w-2xl mx-auto">
            Entrenamientos disponibles en horarios flexibles que se adaptan a tu rutina diaria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Schedule Cards */}
          <div className="space-y-6">
            {scheduleData.map((schedule, index) => (
              <Card key={index} className="border-2 hover:border-fitgym-orange transition-smooth hover:shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-fitgym-dark">
                    <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-black">{schedule.days}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-fitgym-orange" />
                    <span className="text-2xl font-bold text-fitgym-dark">{schedule.hours}</span>
                  </div>
                  <p className="text-fitgym-gray">{schedule.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Location Info */}
            <Card className="bg-gradient-card border-2 border-fitgym-orange shadow-glow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-fitgym-dark">
                  <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-black">Nuestra Ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-fitgym-dark font-semibold mb-2">
                  Coop Villa Periodista Mz G Lt 1
                </p>
                <p className="text-fitgym-gray">
                  Fácil acceso y estacionamiento gratuito para todos nuestros miembros
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Equipment Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-intense">
              <img 
                src={equipmentImage} 
                alt="Equipos modernos de entrenamiento en FitGym"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fitgym-dark/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-black mb-2">Equipos de Última Generación</h3>
                <p className="text-white/90">
                  Maquinaria profesional para maximizar tus resultados de entrenamiento
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-card border-2 border-fitgym-orange">
              <div className="text-center">
                <div className="text-3xl font-black text-fitgym-orange">14h</div>
                <div className="text-fitgym-gray font-medium">Disponible</div>
                <div className="text-fitgym-gray font-medium">Lun - Sáb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;