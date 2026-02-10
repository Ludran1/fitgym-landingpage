import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/51960930024?text=Hola%20FitGym,%20quiero%20info%20sobre%20las%20promos...";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center group animate-pulse hover:animate-none"
      aria-label="Chat en WhatsApp"
      style={{ boxShadow: "0 4px 14px rgba(37, 211, 102, 0.5)" }}
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-3 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default WhatsAppButton;
