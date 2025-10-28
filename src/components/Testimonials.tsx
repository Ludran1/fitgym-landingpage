import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Miembro desde 2023",
      text: "FitGym Sedeate ha cambiado mi vida completamente. El ambiente es increíble y los entrenadores son muy profesionales. ¡Altamente recomendado!",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      role: "Miembro desde 2022",
      text: "Excelentes instalaciones y equipo de primera calidad. El plan personalizado me ayudó a alcanzar mis objetivos en tiempo récord.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Miembro desde 2024",
      text: "Lo mejor de la zona. Entrenar aquí es una experiencia única, el equipo siempre está dispuesto a ayudar y motivar.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiencias reales de nuestra comunidad FitGym
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
