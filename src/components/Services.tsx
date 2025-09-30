import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileText, 
  Users, 
  Database, 
  TrendingUp, 
  CheckCircle,
  Phone,
  Briefcase
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Serviços Contábeis",
      description: "Escrituração contábil completa, balanços, demonstrações financeiras e controle patrimonial.",
      features: [
        "Escrituração contábil",
        "Balanço patrimonial",
        "DRE e demonstrações",
        "Controle de estoque"
      ]
    },
    {
      icon: FileText,
      title: "Serviços Fiscais",
      description: "Apuração e entrega de obrigações fiscais, planejamento tributário e consultoria fiscal.",
      features: [
        "Apuração de impostos",
        "SPED Fiscal",
        "Planejamento tributário",
        "Consultoria fiscal"
      ]
    },
    {
      icon: Users,
      title: "Recursos Humanos",
      description: "Gestão completa de folha de pagamento, admissões, demissões e rotinas trabalhistas.",
      features: [
        "Folha de pagamento",
        "Admissões e demissões",
        "13º salário e férias",
        "Rescisões trabalhistas"
      ]
    },
    {
      icon: Database,
      title: "E-Social",
      description: "Implementação e operação do eSocial, garantindo compliance com as obrigações digitais.",
      features: [
        "Implantação do eSocial",
        "Envio de eventos",
        "Monitoramento",
        "Correções e ajustes"
      ]
    },
    {
      icon: TrendingUp,
      title: "Assessoria Financeira",
      description: "Consultoria financeira, análise de resultados, planejamento e controle de fluxo de caixa.",
      features: [
        "Análise financeira",
        "Fluxo de caixa",
        "Planejamento estratégico",
        "Relatórios gerenciais"
      ]
    },
    {
      icon: Briefcase,
      title: "Assessoria Administrativa",
      description: "Suporte completo na gestão administrativa, otimização de processos e consultoria empresarial.",
      features: [
        "Gestão de processos",
        "Consultoria empresarial",
        "Otimização administrativa",
        "Suporte à gestão"
      ]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas em contabilidade para o crescimento do seu negócio
            </p>
          </div>

          {/* Grid de serviços */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-medium transition-all duration-300 animate-fade-in-up group border-l-4 border-l-secondary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="p-4 bg-secondary-lighter rounded-xl group-hover:bg-secondary transition-colors w-fit">
                    <service.icon size={28} className="text-secondary group-hover:text-secondary-foreground" />
                  </div>
                </div>

                <h3 className="text-xl font-playfair font-semibold mb-4 text-primary">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle size={16} className="text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Card className="p-8 bg-gradient-secondary text-secondary-foreground animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Precisa de ajuda com sua contabilidade?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5516032024972', '_blank')}
                className="bg-primary hover:bg-primary-light text-primary-foreground px-8 py-3"
              >
                <Phone className="mr-2" size={20} />
                Solicitar Orçamento
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;