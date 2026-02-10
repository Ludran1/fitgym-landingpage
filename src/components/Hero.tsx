import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/gym-hero.jpg";

const Hero = () => {
  const whatsappUrl = "https://wa.me/51960930024?text=Hola%20FitGym,%20quiero%20mi%20Pase%20Gratis%20de%201%20D%C3%ADa%20%F0%9F%8E%81";

  return <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Gimnasio FitGym en Ate Vitarte con máquinas modernas" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-fitgym-dark/90 via-fitgym-dark/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            FitGym: Tu Mejor Versión <span className="text-fitgym-orange">Empieza Aquí en Ate</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            Máquinas modernas, Zona de Baile y el mejor ambiente de Vitarte. Entrena desde <span className="font-bold text-fitgym-orange">S/ 90 al mes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-6 h-auto relative overflow-hidden group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <span className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none group-hover:bg-white/10" />
                <span className="relative z-10 flex items-center gap-2">
                  🎁 Obtener Pase Gratis de 1 Día
                  <ArrowRight size={18} />
                </span>
              </a>
            </Button>
            
            <Button asChild variant="outline-orange" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-fitgym-dark">
              <a href="https://www.tiktok.com/@fitgymsedeate" target="_blank" rel="noopener noreferrer">
                <Play className="mr-2" size={18} />
                Ver Instalaciones
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">+30</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Máquinas Modernas</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">Baile</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Zumba y Latinos</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">Ate</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Mejor Ubicación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;