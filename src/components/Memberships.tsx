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
        "Casillero incluido",
        "Estacionamiento gratuito"
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
        "Acceso a zona VIP",
        "Toallas limpias incluidas",
        "Bebidas deportivas con descuento"
      ],
      popular: true,
      icon: <Crown className="w-6 h-6" />
    }
  ];

  return (
    <section id="membresias" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-fitgym-dark mb-6">
            Elige Tu <span className="text-fitgym-orange">Membresía</span>
          </h2>
          <p className="text-xl text-fitgym-gray max-w-2xl mx-auto">
            Planes diseñados para adaptarse a tus objetivos y estilo de vida. 
            Comienza tu transformación hoy mismo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                
                <CardTitle className="text-2xl font-black text-fitgym-dark">
                  {membership.name}
                </CardTitle>
                
                <div className="mt-4">
                  <span className="text-5xl font-black text-fitgym-orange">
                    {membership.price}
                  </span>
                  <span className="text-fitgym-gray ml-2">/ {membership.period}</span>
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
                    variant={membership.popular ? "orange" : "outline-orange"}
                    className="w-full text-lg py-3 h-auto font-bold"
                  >
                    {membership.popular ? "Elegir Premium" : "Elegir Básica"}
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