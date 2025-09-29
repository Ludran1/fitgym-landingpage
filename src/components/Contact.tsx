import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-fitgym-dark to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            ¡Comienza <span className="text-fitgym-orange">Hoy Mismo!</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Da el primer paso hacia tu transformación. Contáctanos y únete a la familia FitGym.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black">Ubicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-medium">
                  Coop Villa Periodista<br />
                  Mz G Lt 1<br />
                  Lima, Perú
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black">Horarios</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  <strong>Lun - Sáb:</strong> 8AM - 10PM<br />
                  <strong>Domingo:</strong> 8AM - 12PM
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black">Teléfono</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-medium">
                  960 930 024<br />
                  <span className="text-sm text-white/70">WhatsApp disponible</span>
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-smooth">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-black">Email</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 font-medium">
                  info@fitgym.pe<br />
                  <span className="text-sm text-white/70">Respuesta en 24h</span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <Card className="bg-gradient-accent border-none text-white shadow-intense">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-black">
                  ¡Únete Ahora!
                </CardTitle>
                <p className="text-white/90">
                  Primera semana GRATIS para nuevos miembros
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="secondary" className="w-full text-lg py-3 h-auto font-bold bg-white text-fitgym-orange hover:bg-white/90">
                  Reservar Cita
                </Button>
                <Button variant="outline" className="w-full text-lg py-3 h-auto font-bold border-white text-white hover:bg-white hover:text-fitgym-orange">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-black">Síguenos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <button className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                    <Facebook className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                    <Instagram className="w-6 h-6 text-white" />
                  </button>
                  <button className="w-12 h-12 bg-fitgym-orange rounded-full flex items-center justify-center hover:bg-fitgym-orange-light transition-smooth">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </button>
                </div>
                <p className="text-center text-white/70 mt-4 text-sm">
                  @fitgym_oficial
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;