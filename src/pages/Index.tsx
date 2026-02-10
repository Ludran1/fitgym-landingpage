import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Memberships from "@/components/Memberships";
import PromoGroup from "@/components/PromoGroup";
import Gallery from "@/components/Gallery";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Memberships />
      <PromoGroup />
      <Gallery />
      <Schedule />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
