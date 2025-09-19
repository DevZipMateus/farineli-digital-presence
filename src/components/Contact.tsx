import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(16) 3202-4972",
      action: () => window.open('tel:+5516032024972', '_self')
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "farinelicontabilidade@gmail.com",
      action: () => window.open('mailto:farinelicontabilidade@gmail.com', '_self')
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Tiradentes, 1179 - Centro, Jaboticabal/SP",
      action: () => window.open('https://www.google.com/maps/place/Farineli+Contabilidade/@-21.2628963,-48.318902,16.75z/data=!4m15!1m8!3m7!1s0x94b96c9e5f1f3243:0x9c90436b0aec5160!2sAv.+Tiradentes,+1179+-+Centro,+Jaboticabal+-+SP,+14870-020!3b1!8m2!3d-21.2629748!4d-48.3167209!16s%2Fg%2F11c19_8x72!3m5!1s0x94b96d3966e99655:0x72833d0ca008936b!8m2!3d-21.2629748!4d-48.3167209!16s%2Fg%2F11vpt8t8g5?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D', '_blank')
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 08h-11h / 13h30-17h",
      action: null
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Título da seção */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-primary">
              Fale Conosco
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Entre em contato e solicite um orçamento personalizado para sua empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informações de contato */}
            <div className="space-y-8">
              <div className="animate-fade-in-up">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-primary">
                  Entre em contato
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos prontos para atender sua empresa com soluções contábeis personalizadas. 
                  Fale conosco através dos canais abaixo.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index}
                    className={`p-6 hover:shadow-medium transition-all duration-300 animate-fade-in-up ${
                      item.action ? 'cursor-pointer hover:bg-accent' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={item.action || undefined}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary-lighter rounded-full">
                        <item.icon size={20} className="text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button 
                  size="lg"
                  onClick={() => window.open('https://wa.me/5516032024972', '_blank')}
                  className="bg-secondary hover:bg-secondary-light text-secondary-foreground px-8 py-3"
                >
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://linkedin.com/in/alessandra-de-paula-a9144039', '_blank')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Mapa */}
            <div className="animate-fade-in-up">
              <Card className="overflow-hidden shadow-medium">
                <div className="p-6 bg-primary text-primary-foreground">
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    Nossa Localização
                  </h3>
                  <p className="opacity-90">
                    Venha nos visitar em nosso escritório no centro de Jaboticabal
                  </p>
                </div>
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.8234567890123!2d-48.3167209!3d-21.2629748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b96d3966e99655%3A0x72833d0ca008936b!2sFarineli%20Contabilidade!5e0!3m2!1spt!2sbr!4v1632456789012!5m2!1spt!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Farineli Contabilidade"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;