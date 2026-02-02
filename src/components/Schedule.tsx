import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, MapPin, Users } from "lucide-react";
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

  const classesData = [
    {
      days: "Lunes, Miércoles y Viernes",
      hours: "7:30 PM",
      description: "Clases grupales de baile y entrenamiento funcional"
    }
  ];

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-fitgym-dark mb-6">
            Horarios de <span className="text-fitgym-orange">Atención</span>
          </h2>
          <p className="text-lg sm:text-xl text-fitgym-gray max-w-2xl mx-auto px-4">
            Entrenamientos disponibles en horarios flexibles que se adaptan a tu rutina diaria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Schedule Cards */}
          <div className="space-y-6">
            {scheduleData.map((schedule, index) => (
              <Card key={index} className="border-2 hover:border-fitgym-orange transition-smooth hover:shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-fitgym-dark">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-lg sm:text-xl font-black">{schedule.days}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-fitgym-orange" />
                    <span className="text-xl sm:text-2xl font-bold text-fitgym-dark">{schedule.hours}</span>
                  </div>
                  <p className="text-fitgym-gray">{schedule.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Group Classes */}
            {classesData.map((classItem, index) => (
              <Card key={`class-${index}`} className="border-2 border-fitgym-orange/50 bg-fitgym-orange/5 hover:border-fitgym-orange transition-smooth hover:shadow-card">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-3 text-fitgym-dark">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <span className="text-lg sm:text-xl font-black">Clases Grupales</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="w-5 h-5 text-fitgym-orange" />
                    <span className="text-lg font-bold text-fitgym-dark">{classItem.days}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-fitgym-orange" />
                    <span className="text-xl sm:text-2xl font-bold text-fitgym-dark">{classItem.hours}</span>
                  </div>
                  <p className="text-fitgym-gray">{classItem.description}</p>
                </CardContent>
              </Card>
            ))}

            {/* Location Info */}
            <Card className="bg-gradient-card border-2 border-fitgym-orange shadow-glow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3 text-fitgym-dark">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-lg sm:text-xl font-black">Nuestra Ubicación</span>
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
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fitgym-dark/60 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 text-white">
                <h3 className="text-lg sm:text-2xl font-black mb-2">Equipos de Última Generación</h3>
                <p className="text-white/90 text-sm sm:text-base">
                  Maquinaria profesional para maximizar tus resultados de entrenamiento
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl p-4 sm:p-6 shadow-card border-2 border-fitgym-orange">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-black text-fitgym-orange">14h</div>
                <div className="text-fitgym-gray font-medium text-sm sm:text-base">Disponible</div>
                <div className="text-fitgym-gray font-medium text-sm sm:text-base">Lun - Sáb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;