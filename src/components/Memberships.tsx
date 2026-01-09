import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown } from "lucide-react";
import membershipImage from "@/assets/membership-card.jpg";

// Modelo reutilizable de Pricing Card
// Tipado del plan
type Membership = {
  name: string;
  price: string;
  period: string; // "mensual" | "trimestral"
  description: string;
  features: string[];
  popular: boolean;
  icon: JSX.Element;
};

// Componente de Pricing Card
const PricingCard = ({ membership }: { membership: Membership }) => {
  const isPremium = membership.name.toLowerCase().includes("premium");

  // Mensajes de WhatsApp
  const monthlyBasicHref =
    "https://wa.me/51960930024?text=%C2%A1Hola,%20FitGym!%20Estoy%20listo(a)%20para%20arrancar%20mi%20cambio%20y%20quiero%20hacerlo%20con%20la%20membres%C3%ADa%20b%C3%A1sica.%20%C2%BFMe%20pueden%20guiar%20con%20los%20siguientes%20beneficios?%F0%9F%A7%98%E2%80%8D%E2%99%80%EF%B8%8F%0A%E2%80%A2%20Acceso%20a%20pesas%20libres%0A%E2%80%A2%20M%C3%A1quinas%20cardiovasculares%0A%E2%80%A2%20Acceso%20de%20lunes%20a%20domingo%0A%E2%80%A2%20Asesor%C3%ADa%20inicial%20gratis%0A%E2%80%A2%20Casillero%20incluido%0A%0AMe%20gustar%C3%ADa%20saber%20c%C3%B3mo%20puedo%20inscribirme%20y%20si%20puedo%20pagar%20con%20efectivo%20o%20Yape.%20%C2%A1Gracias!%20%F0%9F%92%AA";
  const monthlyPremiumHref =
    "https://wa.me/51960930024?text=%C2%A1Hola,%20FitGym!%20Quiero%20la%20membres%C3%ADa%20Premium%20para%20aprovechar%20todos%20los%20beneficios:%20%F0%9F%8F%8B%EF%B8%8F%E2%80%8D%E2%99%82%EF%B8%8F%0A%E2%80%A2%20Acceso%20completo%20a%20pesas%20y%20cardio%0A%E2%80%A2%20Clases%20grupales%0A%E2%80%A2%20Entrenamiento%20funcional%0A%E2%80%A2%20Asesor%C3%ADa%20nutricional%20mensual%0A%E2%80%A2%20Plan%20personalizado%0A%E2%80%A2%204%20invitaciones%20mensuales%0A%E2%80%A2%204%20bebidas%20deportivas%0A%0A%C2%BFC%C3%B3mo%20puedo%20inscribirme?%20%C2%BFAceptan%20efectivo%20o%20Yape?%20%C2%A1Gracias!%20%F0%9F%92%AA";
  const quarterlyBasicHref =
    "https://wa.me/51960930024?text=%C2%A1Hola,%20FitGym!%20Me%20interesa%20la%20Membres%C3%ADa%20Trimestral%20B%C3%A1sica%20(S/%20170).%20%C2%BFPueden%20darme%20m%C3%A1s%20informaci%C3%B3n%20y%20ayudarme%20con%20la%20inscripci%C3%B3n?%20Gracias";
  const quarterlyPremiumHref =
    "https://wa.me/51960930024?text=%C2%A1Hola,%20FitGym!%20Estoy%20interesado(a)%20en%20la%20Membres%C3%ADa%20Trimestral%20Premium%20(S/%20220).%20%C2%BFPueden%20compartirme%20los%20detalles%20y%20el%20proceso%20de%20inscripci%C3%B3n?%20Gracias";

  const ctaHref =
    membership.period === "trimestral"
      ? isPremium
        ? quarterlyPremiumHref
        : quarterlyBasicHref
      : membership.popular
      ? monthlyPremiumHref
      : monthlyBasicHref;

  const ctaLabel =
    membership.period === "trimestral"
      ? isPremium
        ? "Elegir Trimestral Premium"
        : "Elegir Trimestral Básica"
      : membership.popular
      ? "Elegir Premium"
      : "Elegir Básica";

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-intense transform hover:-translate-y-2 ${
        membership.popular ? "border-fitgym-orange shadow-glow lg:hover:scale-105" : "border-border hover:border-fitgym-orange/50"
      }`}
    >
      {membership.popular && (
        <div className="absolute top-0 right-0 bg-gradient-accent text-white px-4 py-2 text-sm font-bold">MÁS POPULAR</div>
      )}

      <CardHeader className="text-center pb-4">
        <div
          className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
            membership.popular ? "bg-fitgym-orange text-white" : "bg-muted text-fitgym-orange"
          }`}
        >
          {membership.icon}
        </div>

        <CardTitle className="text-xl sm:text-2xl font-black text-fitgym-dark">{membership.name}</CardTitle>

        <div className="mt-4">
          <span className="text-4xl sm:text-5xl font-black text-fitgym-orange">{membership.price}</span>
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
          <Button asChild variant={membership.popular ? "orange" : "outline-orange"} className="w-full text-base sm:text-lg py-3 h-auto font-bold">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              {ctaLabel}
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
      name: "Membresía Básica",
      price: "S/ 60",
      period: "mensual",
      description: "Perfect para comenzar tu transformación",
      features: [
        "Acceso a área de pesas libres",
        "Uso de máquinas cardiovasculares",
        "Acceso de lunes a domingo",
        "Asesoría inicial gratuita",
        "Casillero incluido",
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Membresía Premium",
      price: "S/ 89",
      period: "mensual",
      description: "La experiencia completa de entrenamiento",
      features: [
        "Todo lo incluido en Básica",
        "Entrenamiento funcional",
        "Plan de entrenamiento personalizado",
        "4 invitaciones mensuales",
      ],
      popular: true,
      icon: <Crown className="w-6 h-6" />,
    },
    // Nuevas membresías trimestrales
    {
      name: "Membresía Trimestral Básica",
      price: "S/ 170",
      period: "trimestral",
      description: "Ahorra con el plan trimestral básico",
      features: [
        "Acceso a área de pesas libres",
        "Uso de máquinas cardiovasculares",
        "Acceso de lunes a domingo",
        "Asesoría inicial gratuita",
        "Casillero incluido",
      ],
      popular: false,
      icon: <Star className="w-6 h-6" />,
    },
    {
      name: "Membresía Trimestral Premium",
      price: "S/ 220",
      period: "trimestral",
      description: "La experiencia completa en plan trimestral",
      features: [
        "Todo lo incluido en Básica",
        "Entrenamiento funcional",
        "Plan de entrenamiento personalizado",
        "4 invitaciones mensuales",
        "4 bebidas deportivas mensuales",
      ],
      popular: false,
      icon: <Crown className="w-6 h-6" />,
    },
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

        <div className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scroll-px-4 py-2 max-w-6xl mx-auto lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none">
          {memberships.map((membership) => (
            <div key={membership.name} className="snap-center shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-auto">
              <PricingCard membership={membership} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-fitgym-gray mb-4">¿Tienes dudas sobre qué membresía elegir?</p>
          <Button asChild variant="outline-orange" size="lg">
            <a href="https://wa.me/51960930024?text=%C2%A1Hola%20FitGym!%20Quisiera%20hablar%20con%20un%20asesor%20sobre%20las%20membres%C3%ADas%20y%20cu%C3%A1l%20me%20recomiendan%20para%20mi%20objetivo." target="_blank" rel="noopener noreferrer">
              Habla con un Asesor
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Memberships;