import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/gym-hero.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Moderno gimnasio FitGym con equipos de entrenamiento de alta calidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fitgym-dark/80 via-fitgym-dark/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center lg:text-left">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Transforma tu 
            <span className="block text-fitgym-orange">Fuerza Interior</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl">
            Descubre tu potencial en FitGym. El gimnasio más moderno donde tus límites se convierten en nuevos comienzos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 h-auto">
              Comienza Tu Transformación
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <Button variant="outline-orange" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 h-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-fitgym-dark">
              <Play className="mr-2" size={18} />
              Ver Instalaciones
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">+30</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Miembros Activos</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">3+</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Años de Experiencia</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-fitgym-orange">24/7</div>
              <div className="text-white/80 font-medium text-sm sm:text-base">Equipos Premium</div>
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
    </section>
  );
};

export default Hero;