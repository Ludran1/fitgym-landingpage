import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";
import membershipImage from "@/assets/membership-card.jpg";

const Memberships = () => {
  const memberships = [
    {
      name: "Membresía Básica",
      price: "S/ 69",
      period: "mensual",
      description: "Perfect para comenzar tu transformación",
      features: [
        "Acceso a área de pesas libres",
        "Uso de máquinas cardiovasculares",
        "Acceso de lunes a domingo",
        "Asesoría inicial gratuita",
        "Casillero incluido"
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "Membresía Premium",
      price: "S/ 89", 
      period: "mensual",
      description: "La experiencia completa de entrenamiento",
      features: [
        "Todo lo incluido en Básica",
        "Acceso a clases grupales",
        "Entrenamiento funcional",
        "Asesoría nutricional mensual",
        "Plan de entrenamiento personalizado",
        "4 invitaciones mensuales",
        "4 bebidas deportivas mensuales"
      ],
      popular: true,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section id="membresias" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-fitgym-dark mb-6">
            Elige Tu <span className="text-fitgym-orange">Membresía</span>
          </h2>
          <p className="text-lg sm:text-xl text-fitgym-gray max-w-2xl mx-auto px-4">
            Planes diseñados para adaptarse a tus objetivos y estilo de vida. 
            Comienza tu transformación hoy mismo.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {memberships.map((membership, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-intense transform hover:-translate-y-2 ${
                membership.popular 
                  ? 'border-fitgym-orange shadow-glow scale-105' 
                  : 'border-border hover:border-fitgym-orange/50'
              }`}
            >
              {membership.popular && (
                <div className="absolute top-0 right-0 bg-gradient-accent text-white px-4 py-2 text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  membership.popular ? 'bg-fitgym-orange text-white' : 'bg-muted text-fitgym-orange'
                }`}>
                  {membership.icon}
                </div>
                
                <CardTitle className="text-xl sm:text-2xl font-black text-fitgym-dark">
                  {membership.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-4xl sm:text-5xl font-black text-fitgym-orange">
                    {membership.price}
                  </span>
                  <span className="text-fitgym-gray ml-2 text-sm sm:text-base">/ {membership.period}</span>
                </div>
                
                <p className="text-fitgym-gray mt-2">{membership.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {membership.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="w-5 h-5 text-fitgym-orange" />
                      </div>
                      <span className="text-fitgym-dark">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button 
                    asChild
                    variant={membership.popular ? "orange" : "outline-orange"}
                    className="w-full text-base sm:text-lg py-3 h-auto font-bold"
                  >
                    <a 
                      href={membership.popular 
                        ? "https://wa.me/51960930024?text=¡Hola,%20FitGym!%20Quiero%20la%20membresía%20Premium%20para%20aprovechar%20todos%20los%20beneficios:%20%F0%9F%8F%8B%EF%B8%8F%E2%80%8D%E2%99%82%EF%B8%8F%0A%E2%80%A2%20Acceso%20completo%20a%20pesas%20y%20cardio%0A%E2%80%A2%20Clases%20grupales%0A%E2%80%A2%20Entrenamiento%20funcional%0A%E2%80%A2%20Asesoría%20nutricional%20mensual%0A%E2%80%A2%20Plan%20personalizado%0A%E2%80%A2%204%20invitaciones%20mensuales%0A%E2%80%A2%204%20bebidas%20deportivas%0A%0A¿Cómo%20puedo%20inscribirme?%20¿Aceptan%20efectivo%20o%20Yape?%20¡Gracias!%20%F0%9F%92%AA"
                        : "https://wa.me/51960930024?text=¡Hola,%20FitGym!%20Estoy%20listo(a)%20para%20arrancar%20mi%20cambio%20y%20quiero%20hacerlo%20con%20la%20membresía%20básica.%20¿Me%20pueden%20guiar%20con%20los%20siguientes%20beneficios?%F0%9F%A7%98%E2%80%8D%E2%99%80%EF%B8%8F%0A%E2%80%A2%20Acceso%20a%20pesas%20libres%0A%E2%80%A2%20Máquinas%20cardiovasculares%0A%E2%80%A2%20Acceso%20de%20lunes%20a%20domingo%0A%E2%80%A2%20Asesoría%20inicial%20gratis%0A%E2%80%A2%20Casillero%20incluido%0A%0AMe%20gustaría%20saber%20cómo%20puedo%20inscribirme%20y%20si%20puedo%20pagar%20con%20efectivo%20o%20Yape.%20¡Gracias!%20%F0%9F%92%AA"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {membership.popular ? "Elegir Premium" : "Elegir Básica"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-fitgym-gray mb-4">
            ¿Tienes dudas sobre qué membresía elegir?
          </p>
          <Button variant="outline-orange" size="lg">
            Habla con un Asesor
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Memberships;