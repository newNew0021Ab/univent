import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Plus, Bell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const DesktopNav = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            UNIVENT
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <Link to="/">
              <Button 
                variant={location.pathname === "/" ? "default" : "ghost"}
              >
                Главная
              </Button>
            </Link>
            <Link to="/calendar">
              <Button 
                variant={location.pathname === "/calendar" ? "default" : "outline"}
                className="gap-2"
              >
                <CalendarIcon className="h-4 w-4" />
                Календарь
              </Button>
            </Link>
            <Link to="/create">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Добавить событие
              </Button>
            </Link>
            <Link to="/notifications">
              <Button 
                variant={location.pathname === "/notifications" ? "default" : "outline"}
                className="gap-2"
              >
                <Bell className="h-4 w-4" />
                <span className="hidden lg:inline">Уведомления</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
