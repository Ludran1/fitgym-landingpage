import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitgym-dark py-12 border-t border-fitgym-orange/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              Fit<span className="text-fitgym-orange">Gym</span>
            </h3>
            <p className="text-white/70 mb-4">
              Transformando vidas a través del fitness. Tu gimnasio de confianza con equipos de última generación.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                <Facebook className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                <MessageCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#inicio" className="hover:text-fitgym-orange transition-smooth">Inicio</a></li>
              <li><a href="#membresias" className="hover:text-fitgym-orange transition-smooth">Membresías</a></li>
              <li><a href="#horarios" className="hover:text-fitgym-orange transition-smooth">Horarios</a></li>
              <li><a href="#contacto" className="hover:text-fitgym-orange transition-smooth">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contacto</h4>
            <div className="space-y-2 text-white/70">
              <p>Coop Villa Periodista Mz G Lt 1</p>
              <p>+51 999 888 777</p>
              <p>info@fitgym.pe</p>
              <p className="text-fitgym-orange font-medium">Lun-Sáb: 8AM-10PM | Dom: 8AM-12PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>&copy; 2025 FitGym. Todos los derechos reservados. | Diseñado con 💪 para transformar vidas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;