import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  
  const events: Record<string, Array<{ title: string; time: string; category: string }>> = {
    "15": [{ title: "Научная конференция", time: "10:00", category: "Наука" }],
    "20": [{ title: "Чемпионат по баскетболу", time: "14:00", category: "Спорт" }],
    "25": [{ title: "Студенческий концерт", time: "18:00", category: "Культура" }],
    "28": [{ title: "Карьерный день", time: "11:00", category: "Карьера" }],
    "30": [{ title: "Благотворительная акция", time: "09:00", category: "Волонтерство" }],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
  
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Наука": "bg-primary/10 text-primary",
      "Спорт": "bg-secondary/10 text-secondary",
      "Культура": "bg-accent/10 text-accent",
      "Карьера": "bg-primary/10 text-primary",
      "Волонтерство": "bg-secondary/10 text-secondary",
    };
    return colors[category] || "bg-muted";
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Назад
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
                <div key={day} className="text-center font-semibold text-sm text-muted-foreground p-2">
                  {day}
                </div>
              ))}
              
              {/* Empty cells for days before month starts */}
              {Array.from({ length: startingDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`} className="p-2" />
              ))}
              
              {/* Days of the month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dayStr = day.toString();
                const hasEvents = events[dayStr];
                
                return (
                  <div
                    key={day}
                    className={`min-h-[80px] p-2 border rounded-lg transition-colors ${
                      hasEvents
                        ? "border-primary bg-primary/5 hover:bg-primary/10"
                        : "border-border hover:bg-muted/50"
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{day}</div>
                    {hasEvents && (
                      <div className="space-y-1">
                        {hasEvents.map((event, idx) => (
                          <div
                            key={idx}
                            className="text-xs bg-card rounded px-1 py-0.5 truncate"
                          >
                            <Badge variant="outline" className={`${getCategoryColor(event.category)} text-xs px-1 py-0`}>
                              {event.time}
                            </Badge>
                            <div className="truncate">{event.title}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="font-semibold mb-3">Легенда</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/10 text-primary">Наука</Badge>
                <Badge className="bg-secondary/10 text-secondary">Спорт</Badge>
                <Badge className="bg-accent/10 text-accent">Культура</Badge>
                <Badge className="bg-primary/10 text-primary">Карьера</Badge>
                <Badge className="bg-secondary/10 text-secondary">Волонтерство</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
