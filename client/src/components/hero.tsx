import { Phone } from "lucide-react";

export default function Hero() {
  const handleCallClick = () => {
    window.location.href = "tel:+43123456789";
  };

  return (
    <section id="startseite" className="hero-bg min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Authentischer <span className="text-red-400">Balkan-Grill</span><br />
          in Baden
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Erleben Sie den wahren Geschmack des Balkans mit unseren frisch gegrillten Spezialitäten
        </p>
        <button 
          onClick={handleCallClick}
          className="cta-button bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
          data-testid="button-call-now"
        >
          <Phone className="mr-3 h-5 w-5" />
          Jetzt anrufen
        </button>
      </div>
    </section>
  );
}
