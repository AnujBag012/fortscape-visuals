import { MapPin, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DestinationCardProps {
  image: string;
  title: string;
  location?: string;
  rating?: number;
  description?: string;
  className?: string;
}

const DestinationCard = ({ 
  image, 
  title, 
  location, 
  rating = 4.8, 
  description,
  className = "" 
}: DestinationCardProps) => {
  return (
    <Card className={`group relative overflow-hidden rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 cursor-pointer ${className}`}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-semibold text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        {location && (
          <div className="flex items-center space-x-1 mb-2">
            <MapPin className="w-4 h-4 text-white/80" />
            <span className="text-sm text-white/80">{location}</span>
          </div>
        )}
        
        {description && (
          <p className="text-sm text-white/90 line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
    </Card>
  );
};

export default DestinationCard;