import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CategoryFilter } from "@/components/CategoryFilter";
import { EventCard } from "@/components/EventCard";
import { DesktopNav } from "@/components/DesktopNav";
import { MobileNav } from "@/components/MobileNav";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const events = [
    {
      title: "Научная конференция молодых исследователей",
      date: "15 марта 2025",
      time: "10:00 - 16:00",
      location: "Главный корпус, актовый зал",
      category: "Наука",
      participants: 120,
      description: "Ежегодная конференция для студентов и аспирантов. Презентация научных работ, обмен опытом.",
      image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=400&fit=crop"
    },
    {
      title: "Чемпионат по баскетболу",
      date: "20 марта 2025",
      time: "14:00 - 18:00",
      location: "Спортивный комплекс",
      category: "Спорт",
      participants: 85,
      description: "Межфакультетский турнир по баскетболу. Приходите поддержать свою команду!",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=400&fit=crop"
    },
    {
      title: "Студенческий концерт 'Весна 2025'",
      date: "25 марта 2025",
      time: "18:00 - 21:00",
      location: "Дом культуры студентов",
      category: "Культура",
      participants: 200,
      description: "Грандиозное шоу с участием лучших студенческих коллективов университета.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop"
    },
    {
      title: "Карьерный день IT-компаний",
      date: "28 марта 2025",
      time: "11:00 - 17:00",
      location: "Корпус факультета МиИ",
      category: "Карьера",
      participants: 150,
      description: "Встреча с представителями ведущих IT-компаний. Стажировки и вакансии.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
    },
    {
      title: "Благотворительная акция 'Добрые дела'",
      date: "30 марта 2025",
      time: "09:00 - 15:00",
      location: "Сбор у главного корпуса",
      category: "Волонтерство",
      participants: 65,
      description: "Помощь приюту для животных. Участвуйте в доброй традиции университета!",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop"
    },
    {
      title: "Мастер-класс по публичным выступлениям",
      date: "5 апреля 2025",
      time: "15:00 - 17:00",
      location: "Аудитория 315",
      category: "Карьера",
      participants: 45,
      description: "Развитие навыков презентации и уверенного выступления перед аудиторией.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop"
    },
  ];

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(event => {
        const categoryMap: Record<string, string> = {
          science: "Наука",
          sport: "Спорт",
          culture: "Культура",
          career: "Карьера",
          volunteer: "Волонтерство"
        };
        return event.category === categoryMap[activeCategory];
      });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Navigation */}
      <DesktopNav />
      <MobileNav />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 pb-24 md:pb-12">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Все мероприятия</h2>
          <CategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              Пока нет мероприятий в этой категории
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-lg mb-4">О проекте</h3>
              <p className="text-muted-foreground text-sm">
                UNIVENT - единая платформа студенческих мероприятий ГрГУ имени Янки Купалы
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <p className="text-muted-foreground text-sm">
                Email: univent@grsu.by<br />
                Тел: +375 (152) 73-84-46
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Команда</h3>
              <p className="text-muted-foreground text-sm">
                Факультет экономики и управления<br />
                ГрГУ им. Янки Купалы
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © 2025 UNIVENT. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
