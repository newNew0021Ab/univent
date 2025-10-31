import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  participants?: number;
  image?: string;
  description: string;
}

export const EventCard = ({
  title,
  date,
  time,
  location,
  category,
  participants,
  image,
  description,
}: EventCardProps) => {
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      "Наука": "bg-primary/10 text-primary border-primary/20",
      "Спорт": "bg-secondary/10 text-secondary border-secondary/20",
      "Культура": "bg-accent/10 text-accent border-accent/20",
      "Карьера": "bg-primary/10 text-primary border-primary/20",
      "Волонтерство": "bg-secondary/10 text-secondary border-secondary/20",
    };
    return colors[cat] || "bg-muted text-muted-foreground";
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-hover)] group">
      {image && (
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge className={getCategoryColor(category)} variant="outline">
              {category}
            </Badge>
          </div>
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {participants && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{participants} участников</span>
            </div>
          )}
        </div>
        <Button className="w-full" variant="default">
          Зарегистрироваться
        </Button>
      </CardContent>
    </Card>
  );
};
