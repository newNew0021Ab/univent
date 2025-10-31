import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Calendar, Bell, LogOut, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = {
    name: "Иван Иванов",
    email: "ivanov@grsu.by",
    role: "Студент",
    faculty: "Факультет экономики и управления",
    registeredEvents: 5,
    organizedEvents: 0,
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Назад
        </Link>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl">Профиль</CardTitle>
              <Button variant="outline" size="sm">
                Редактировать
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.faculty}</p>
                <Badge className="mt-2">{user.role}</Badge>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5" />
                <span>Зарегистрирован на {user.registeredEvents} мероприятий</span>
              </div>
              {user.organizedEvents > 0 && (
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Bell className="h-5 w-5" />
                  <span>Организовано {user.organizedEvents} мероприятий</span>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-border">
              <Button variant="outline" className="w-full gap-2 text-destructive hover:text-destructive">
                <LogOut className="h-4 w-4" />
                Выйти из аккаунта
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
