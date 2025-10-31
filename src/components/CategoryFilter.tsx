import { Button } from "@/components/ui/button";
import { Beaker, Trophy, Music, Briefcase, Heart } from "lucide-react";

interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", label: "Все", icon: null },
  { id: "science", label: "Наука", icon: Beaker },
  { id: "sport", label: "Спорт", icon: Trophy },
  { id: "culture", label: "Культура", icon: Music },
  { id: "career", label: "Карьера", icon: Briefcase },
  { id: "volunteer", label: "Волонтерство", icon: Heart },
];

export const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = activeCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isActive ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className="gap-2 transition-all duration-300"
          >
            {Icon && <Icon className="h-4 w-4" />}
            {category.label}
          </Button>
        );
      })}
    </div>
  );
};
