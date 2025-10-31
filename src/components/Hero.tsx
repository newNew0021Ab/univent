import { Button } from "@/components/ui/button";
import { Search, Bell } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Студенческие мероприятия"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          UNIVENT
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Все студенческие мероприятия ГрГУ в одном месте
        </p>
        <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Находи события по своим интересам, регистрируйся онлайн и будь в центре студенческой жизни
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 gap-2 text-lg px-8 py-6"
          >
            <Search className="h-5 w-5" />
            Найти мероприятие
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm gap-2 text-lg px-8 py-6"
          >
            <Bell className="h-5 w-5" />
            Подписаться на уведомления
          </Button>
        </div>
      </div>
    </section>
  );
};
