import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Memberships from "@/components/Memberships";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Memberships />
      <Testimonials />
      <Gallery />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
