import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const handleCallClick = () => {
    window.location.href = "tel:+43123456789";
  };

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="kontakt" className="bg-secondary py-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4" data-testid="text-footer-title">
              Grillhaus Shpati
            </h3>
            <p className="text-muted-foreground mb-4" data-testid="text-footer-description">
              Authentische Balkan-Küche im Herzen von Baden
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mr-3" />
                <span data-testid="text-address">Baden, Österreich</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-primary mr-3" />
                <button 
                  onClick={handleCallClick}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  data-testid="button-phone"
                >
                  +43 123 456 789
                </button>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mr-3" />
                <span data-testid="text-email">info@grillhaus-shpati.at</span>
              </div>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Öffnungszeiten</h4>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex justify-between" data-testid="text-hours-weekdays">
                <span>Mo-Do:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between" data-testid="text-hours-weekend">
                <span>Fr-Sa:</span>
                <span>11:00 - 23:00</span>
              </div>
              <div className="flex justify-between" data-testid="text-hours-sunday">
                <span>Sonntag:</span>
                <span>12:00 - 21:00</span>
              </div>
            </div>
          </div>

          {/* Schnelllinks */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Schnelllinks</h4>
            <div className="space-y-2">
              <a 
                href="#startseite" 
                onClick={scrollToSection('startseite')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-footer-home"
              >
                Startseite
              </a>
              <a 
                href="#speisekarte" 
                onClick={scrollToSection('speisekarte')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-footer-menu"
              >
                Speisekarte
              </a>
              <a 
                href="#standort" 
                onClick={scrollToSection('standort')}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                data-testid="link-footer-location"
              >
                Standort
              </a>
              <button 
                onClick={handleCallClick}
                className="block text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                data-testid="button-footer-reservation"
              >
                Reservierung
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground" data-testid="text-copyright">
            © 2024 Grillhaus Shpati. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
