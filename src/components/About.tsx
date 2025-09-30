import { Card } from '@/components/ui/card';
import { Heart, Shield, Clock, Award } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Relacionamento próximo e personalizado com cada cliente"
  }, {
    icon: Shield,
    title: "Confiança",
    description: "Transparência e segurança em todos os processos"
  }, {
    icon: Clock,
    title: "Agilidade",
    description: "Prazos cumpridos e respostas rápidas"
  }, {
    icon: Award,
    title: "Excelência",
    description: "Qualidade e precisão em todos os serviços"
  }];
  return <section id="sobre" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">Sobre a Farineli Contabilidade</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tradição e inovação no mercado contábil
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Texto principal */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-primary">
                Nossa história
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-foreground">
                <p>
                  A Farineli Contabilidade se dedica a oferecer 
                  serviços contábeis, fiscais e de consultoria com excelência e comprometimento.
                </p>
                <p>
                  Gerenciamos finanças, controlamos folha de pagamento e documentação fiscal 
                  e contábil. Nossa especialidade está na regularização de empresas e no 
                  oferecimento de relatórios e planejamento estratégico para tomada de decisões.
                </p>
                <p>Nosso diferencial é o atendimento personalizado e a proximidade com nossos clientes, características que só uma empresa totalmente dedicada pode proporcionar. Além disso contamos com profissionais com vasta experiência em diversos segmentos de mercado, onde se destaca principalmente a área de construção civil dando suporte desde o planejamento da obra.</p>
              </div>
            </div>

            {/* Horário de funcionamento */}
            <Card className="p-8 shadow-medium animate-fade-in-up">
              <h3 className="text-2xl font-playfair font-semibold mb-6 text-primary">
                Horário de funcionamento
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a sexta-feira</span>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Manhã:</span>
                    <span className="font-medium">08h às 11h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tarde:</span>
                    <span className="font-medium">13h30 às 17h</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Atendimento por WhatsApp disponível 24h
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Valores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 animate-fade-in-up group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-secondary-lighter rounded-full group-hover:bg-secondary transition-colors">
                    <value.icon size={24} className="text-secondary group-hover:text-secondary-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-3 text-primary">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;