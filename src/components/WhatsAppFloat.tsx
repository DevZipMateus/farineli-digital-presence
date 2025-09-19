import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5516032024972', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-strong hover:shadow-medium transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;