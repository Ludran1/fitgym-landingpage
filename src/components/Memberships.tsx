import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown, Music, Dumbbell } from "lucide-react";

type Membership = {
  name: string;
  price: string;
  originalPrice: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: JSX.Element;
  whatsappMessage: string;
};

const PricingCard = ({ membership }: { membership: Membership }) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-intense transform hover:-translate-y-2 flex flex-col h-full ${
        membership.popular 
          ? "border-2 border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] lg:scale-105 z-10" 
          : "border-border hover:border-fitgym-orange/50"
      }`}
    >
      {membership.popular && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 text-sm font-black shadow-md flex items-center gap-1">
          <Crown size={14} className="fill-black" /> MÁS VENDIDO
        </div>
      )}

      <CardHeader className="text-center pb-4 pt-8">
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
            membership.popular ? "bg-yellow-400 text-black" : "bg-muted text-fitgym-orange"
          }`}
        >
          {membership.icon}
        </div>

        <CardTitle className="text-xl sm:text-2xl font-black text-fitgym-dark uppercase tracking-wide">
          {membership.name}
        </CardTitle>

        <div className="mt-4 flex flex-col items-center justify-center gap-1">
          <span className="text-gray-400 text-lg line-through font-medium">
             {membership.originalPrice}
          </span>
          <div className="flex items-baseline">
            <span className="text-4xl sm:text-5xl font-black text-fitgym-orange">
              {membership.price}
            </span>
            <span className="text-fitgym-gray ml-2 text-sm sm:text-base font-medium">
              / {membership.period}
            </span>
          </div>
        </div>

        <p className="text-fitgym-gray mt-2 font-medium">{membership.description}</p>
      </CardHeader>

      <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {membership.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <Check className={`w-5 h-5 ${membership.popular ? 'text-yellow-500' : 'text-fitgym-orange'}`} />
              </div>
              <span className="text-fitgym-dark text-sm sm:text-base">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-6 mt-auto">
          <Button 
            asChild 
            className={`w-full text-base sm:text-lg py-6 h-auto font-bold shadow-lg transition-transform hover:scale-[1.02] ${
              membership.popular 
                ? "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black border-none" 
                : "bg-fitgym-dark hover:bg-fitgym-dark/90 text-white"
            }`}
          >
            <a 
              href={`https://wa.me/51960930024?text=${encodeURIComponent(membership.whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ¡LO QUIERO YA! 
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Memberships = () => {
  const memberships: Membership[] = [
    {
      name: "SOLO BAILE",
      price: "S/ 80",
      originalPrice: "Antes S/ 100",
      period: "mes",
      description: "¡Diviértete mientras quemas calorías!",
      features: [
        "Full Body intenso",
        "Clases de Zumba",
        "Ritmos Latinos",
        "3 veces por semana",
        "Ambiente súper divertido"
      ],
      popular: false,
      icon: <Music className="w-8 h-8" />,
      whatsappMessage: "Hola FitGym, me interesa el plan SOLO BAILE de S/ 80. ¿Tienen vacantes?"
    },
    {
      name: "PACK COMBO",
      price: "S/ 120",
      originalPrice: "Antes S/ 170",
      period: "mes",
      description: "¡Lo mejor de los dos mundos!",
      features: [
        "Pesas ILIMITADAS",
        "Zona de Cardio",
        "Clases de Baile incluidas",
        "Horario libre completo",
        "Asesoría de rutina básica"
      ],
      popular: true,
      icon: <Crown className="w-8 h-8" />,
      whatsappMessage: "Hola FitGym, quiero aprovechar el PACK COMBO de S/ 120 (Pesas + Baile). ¿Cómo me inscribo?"
    },
    {
      name: "SOLO GYM",
      price: "S/ 90",
      originalPrice: "Antes S/ 120",
      period: "mes",
      description: "Enfócate en construir músculo",
      features: [
        "Acceso ilimitado a máquinas",
        "Zona de pesos libres",
        "Zona de cardio",
        "Asesoría básica incluida",
        "Sin restricciones de horario"
      ],
      popular: false,
      icon: <Dumbbell className="w-8 h-8" />,
      whatsappMessage: "Hola FitGym, me interesa el plan SOLO GYM de S/ 90. ¿Qué horarios tienen?"
    }
  ];

  return (
    <section id="membresias" className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-fitgym-dark mb-6">
            Precios de <span className="text-fitgym-orange">Locura</span>
          </h2>
          <p className="text-lg sm:text-xl text-fitgym-gray max-w-2xl mx-auto px-4">
            Elige el plan que mejor se adapte a ti. Sin matrículas escondidas ni contratos complicados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {memberships.map((membership) => (
            <div key={membership.name} className="h-full">
              <PricingCard membership={membership} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memberships;