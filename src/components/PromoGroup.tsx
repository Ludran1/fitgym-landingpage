import { Button } from "@/components/ui/button";
import { Users, UserPlus, PartyPopper } from "lucide-react";

const PromoGroup = () => {
  const whatsappUrl = "https://wa.me/51960930024?text=Hola%20FitGym,%20me%20interesa%20la%20Promo%20Mancha%20para%20m%C3%AD%20y%20mis%20amigos.%20%C2%BFNos%20dan%20m%C3%A1s%20info?";

  const promos = [
    {
      title: "Dúo",
      subtitle: "2 Personas",
      discount: "8%",
      icon: <Users className="w-10 h-10 text-fitgym-orange" />,
      description: " descuento c/u"
    },
    {
      title: "Trío",
      subtitle: "3 Personas",
      discount: "12%",
      icon: <UserPlus className="w-10 h-10 text-fitgym-orange" />,
      description: " descuento c/u"
    },
    {
      title: "Mancha",
      subtitle: "4+ Personas",
      discount: "16%",
      icon: <PartyPopper className="w-10 h-10 text-fitgym-orange" />,
      description: " descuento (Mejor Precio)"
    }
  ];

  return (
    <section className="py-16 bg-fitgym-dark text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            ¿Entrenas con amigos? <span className="text-fitgym-orange">¡Pagan Menos!</span>
          </h2>
          <p className="text-gray-300 text-lg">
            La motivación es mejor en grupo. Aprovecha nuestros descuentos especiales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {promos.map((promo, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="bg-fitgym-dark/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-fitgym-orange/30">
                {promo.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{promo.title}</h3>
              <p className="text-gray-400 mb-3">{promo.subtitle}</p>
              <div className="text-fitgym-orange font-black text-3xl mb-1">
                {promo.discount} <span className="text-lg font-normal">OFF</span>
              </div>
              <p className="text-sm text-gray-300">{promo.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="orange" size="lg" className="font-bold text-lg px-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Consultar Promo Grupal al WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoGroup;
