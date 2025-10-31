import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, MapPin, Users, ArrowLeft, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Notifications = () => {
  const [subscriptions, setSubscriptions] = useState({
    science: true,
    sport: false,
    culture: true,
    career: false,
    volunteer: false,
  });

  const notifications = [
    {
      id: 1,
      title: "Новое мероприятие: Научная конференция",
      description: "Приглашаем вас принять участие в ежегодной конференции",
      category: "Наука",
      time: "2 часа назад",
      read: false,
    },
    {
      id: 2,
      title: "Напоминание: Концерт через 2 дня",
      description: "Не забудьте зарегистрироваться на студенческий концерт",
      category: "Культура",
      time: "5 часов назад",
      read: false,
    },
    {
      id: 3,
      title: "Изменение даты: Карьерный день",
      description: "Мероприятие перенесено на 30 марта",
      category: "Карьера",
      time: "1 день назад",
      read: true,
    },
  ];

  const handleSubscriptionChange = (category: keyof typeof subscriptions) => {
    setSubscriptions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
    
    toast.success(
      subscriptions[category] 
        ? "Вы отписались от уведомлений" 
        : "Вы подписались на уведомления"
    );
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-8">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" />
          Назад
        </Link>

        {/* Subscription Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5" />
              Настройки подписок
            </CardTitle>
            <CardDescription>
              Выберите категории мероприятий, о которых хотите получать уведомления
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "science", label: "Наука", icon: "🔬" },
              { id: "sport", label: "Спорт", icon: "⚽" },
              { id: "culture", label: "Культура", icon: "🎭" },
              { id: "career", label: "Карьера", icon: "💼" },
              { id: "volunteer", label: "Волонтерство", icon: "❤️" },
            ].map((category) => (
              <div key={category.id} className="flex items-center justify-between py-2">
                <Label htmlFor={category.id} className="flex items-center gap-2 cursor-pointer">
                  <span className="text-2xl">{category.icon}</span>
                  <span className="font-medium">{category.label}</span>
                </Label>
                <Switch
                  id={category.id}
                  checked={subscriptions[category.id as keyof typeof subscriptions]}
                  onCheckedChange={() => handleSubscriptionChange(category.id as keyof typeof subscriptions)}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notifications List */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Уведомления</CardTitle>
              <Button variant="ghost" size="sm">
                <Check className="h-4 w-4 mr-2" />
                Прочитать все
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-colors ${
                  notification.read
                    ? "bg-muted/30 border-border"
                    : "bg-card border-primary/20 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {notification.category}
                      </Badge>
                      {!notification.read && (
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <h3 className="font-semibold mb-1">{notification.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {notification.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {notification.time}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Перейти
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Example notification preview */}
        <Card className="mt-6 border-primary/50">
          <CardHeader>
            <CardTitle className="text-lg">Пример уведомления</CardTitle>
            <CardDescription>
              Так будут выглядеть push-уведомления на вашем устройстве
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-card rounded-lg shadow-lg border border-border p-4 max-w-sm">
              <div className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-2">
                  <Bell className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm mb-1">UNIVENT</div>
                  <div className="text-sm font-medium mb-1">
                    Новое мероприятие: Научная конференция
                  </div>
                  <div className="text-xs text-muted-foreground">
                    15 марта в 10:00 • Главный корпус
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
