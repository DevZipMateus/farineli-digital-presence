import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-soft' : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>(16) 3202-4972</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={14} />
                <span>farinelicontabilidade@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Av. Tiradentes, 1179 - Centro, Jaboticabal/SP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/logo-farineli.png" 
                alt="Farineli Contabilidade" 
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Button
                variant="ghost"
                onClick={() => scrollToSection('inicio')}
                className="text-foreground hover:text-secondary"
              >
                Início
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('sobre')}
                className="text-foreground hover:text-secondary"
              >
                Sobre
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('servicos')}
                className="text-foreground hover:text-secondary"
              >
                Serviços
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection('contato')}
                className="text-foreground hover:text-secondary"
              >
                Contato
              </Button>
              <Button
                onClick={() => window.open('https://wa.me/5516032024972', '_blank')}
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-6"
              >
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-2">
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('inicio')}
                  className="text-left justify-start"
                >
                  Início
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('sobre')}
                  className="text-left justify-start"
                >
                  Sobre
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('servicos')}
                  className="text-left justify-start"
                >
                  Serviços
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollToSection('contato')}
                  className="text-left justify-start"
                >
                  Contato
                </Button>
                <Button
                  onClick={() => window.open('https://wa.me/5516032024972', '_blank')}
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground mt-2"
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;