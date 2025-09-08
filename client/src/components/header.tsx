import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('startseite');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-xl font-bold transition-colors duration-200 ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}>
              Grillhaus <span className="text-primary">Shpati</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#startseite" 
                onClick={scrollToSection('startseite')}
                className={`hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-startseite"
              >
                Startseite
              </a>
              <a 
                href="#speisekarte" 
                onClick={scrollToSection('speisekarte')}
                className={`hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-speisekarte"
              >
                Speisekarte
              </a>
              <a 
                href="#standort" 
                onClick={scrollToSection('standort')}
                className={`hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-standort"
              >
                Standort
              </a>
              <a 
                href="#kontakt" 
                onClick={scrollToSection('kontakt')}
                className={`hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-kontakt"
              >
                Kontakt
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className={`hover:text-primary focus:outline-none focus:text-primary transition-colors duration-200 ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#startseite" 
                onClick={scrollToSection('startseite')}
                className={`block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-mobile-startseite"
              >
                Startseite
              </a>
              <a 
                href="#speisekarte" 
                onClick={scrollToSection('speisekarte')}
                className={`block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-mobile-speisekarte"
              >
                Speisekarte
              </a>
              <a 
                href="#standort" 
                onClick={scrollToSection('standort')}
                className={`block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-mobile-standort"
              >
                Standort
              </a>
              <a 
                href="#kontakt" 
                onClick={scrollToSection('kontakt')}
                className={`block px-3 py-2 hover:text-primary transition-colors duration-200 font-medium ${isScrolled ? 'text-foreground' : 'text-white dark:text-white'}`}
                data-testid="nav-mobile-kontakt"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
