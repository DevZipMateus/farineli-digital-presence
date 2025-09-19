import { Button } from '@/components/ui/button';
import { ArrowRight, Calculator, FileText, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-float">
          <Calculator size={40} className="text-primary-foreground" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <FileText size={35} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <Users size={45} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <TrendingUp size={38} className="text-primary-foreground" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="animate-fade-in-up">
            {/* H1 - Nome da empresa */}
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
              Farineli Contabilidade
            </h1>

            {/* H2 - Descrição da empresa */}
            <h2 className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Empresa familiar especializada em serviços contábeis, fiscais, RH e assessoria financeira. 
              Oferecemos soluções completas para regularização de empresas e planejamento estratégico.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5516032024972', '_blank')}
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 py-3 text-lg font-semibold shadow-medium"
              >
                Falar pelo WhatsApp
                <ArrowRight className="ml-2" size={20} />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-3 text-lg"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">+15</div>
                <div className="text-sm opacity-90">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90">Empresa familiar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">5</div>
                <div className="text-sm opacity-90">Áreas de atuação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">24h</div>
                <div className="text-sm opacity-90">Suporte por WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;