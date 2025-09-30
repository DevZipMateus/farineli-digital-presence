import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <img 
                src="/logo-farineli.png" 
                alt="Farineli Contabilidade" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Empresa especializada em serviços contábeis, fiscais, RH e assessoria 
                financeira. Oferecemos soluções completas para o crescimento do seu negócio.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/alessandra-de-paula-a9144039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  aria-label="LinkedIn Farineli Contabilidade"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="text-sm">(16) 3202-4972</span>
                </div>
                <div className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5" />
                  <span className="text-sm">farinelicontabilidade@gmail.com</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5" />
                  <span className="text-sm">
                    Av. Tiradentes, 1179<br />
                    Centro - Jaboticabal/SP
                  </span>
                </div>
              </div>
            </div>

            {/* Horários e Serviços */}
            <div>
              <h3 className="font-playfair font-semibold text-lg mb-4">Horário</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>Segunda a sexta</span>
                </div>
                <div className="pl-6 space-y-1 text-primary-foreground/80">
                  <div>Manhã: 08h às 11h</div>
                  <div>Tarde: 13h30 às 17h</div>
                </div>
                <div className="pt-2 text-primary-foreground/80">
                  WhatsApp disponível 24h
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-primary-foreground/60">
                © 2024 Farineli Contabilidade. Todos os direitos reservados.
              </div>
              <div className="text-sm text-primary-foreground/60">
                CNPJ: 172.203.398-36
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;