import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Memberships from "@/components/Memberships";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Memberships />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
