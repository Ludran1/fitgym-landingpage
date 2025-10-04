import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MembershipForm from "./MembershipForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black text-fitgym-dark">
              Fit<span className="text-fitgym-orange">Gym</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium">
              Inicio
            </a>
            <a href="#membresias" className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium">
              Membresías
            </a>
            <a href="#horarios" className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium">
              Horarios
            </a>
            <a href="#contacto" className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="orange" size="lg" onClick={() => setIsFormOpen(true)}>
              Únete Ahora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fitgym-dark hover:text-fitgym-orange transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#inicio" 
                className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a 
                href="#membresias" 
                className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Membresías
              </a>
              <a 
                href="#horarios" 
                className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Horarios
              </a>
              <a 
                href="#contacto" 
                className="text-fitgym-dark hover:text-fitgym-orange transition-smooth font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button variant="orange" className="mt-4" onClick={() => setIsFormOpen(true)}>
                Únete Ahora
              </Button>
            </nav>
          </div>
        )}
      </div>
      
      <MembershipForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </header>
  );
};

export default Header;