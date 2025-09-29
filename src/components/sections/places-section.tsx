import { useState } from "react";
import DestinationCard from "@/components/ui/destination-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import netarhatImage from "@/assets/netarhat.jpg";
import elaImage from "@/assets/ela-national-park.jpg";
import templeImage from "@/assets/jagannath-temple.jpg";
import fortImage from "@/assets/navratangarh-fort.jpg";

const PlacesSection = () => {
  const [selectedPlace, setSelectedPlace] = useState<any>(null);
  const places = [
    {
      image: netarhatImage,
      title: "Netarhat",
      location: "Jharkhand",
      description: "Known as the 'Queen of Chotanagpur', this hill station offers breathtaking sunrise views and serene landscapes."
    },
    {
      image: elaImage,
      title: "Ela National Park",
      location: "Jharkhand",
      description: "A pristine wildlife sanctuary home to diverse flora and fauna in the heart of India's wilderness."
    },
    {
      image: templeImage,
      title: "Jagannath Temple (Ranchi)",
      location: "Ranchi, Jharkhand",
      description: "A magnificent temple showcasing traditional architecture and spiritual significance in the capital city."
    },
    {
      image: fortImage,
      title: "Navratangarh Fort (Gumla)",
      location: "Gumla, Jharkhand",
      description: "An ancient fort standing majestically on hilltops, offering panoramic views and rich historical heritage."
    }
  ];

  return (
    <section className="py-20 bg-background" id="places">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Places to Visit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the hidden treasures of Jharkhand, where nature meets history and adventure awaits at every turn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <div key={index} onClick={() => setSelectedPlace(place)}>
              <DestinationCard
                image={place.image}
                title={place.title}
                location={place.location}
                description={place.description}
                className="h-80"
              />
            </div>
          ))}
        </div>

        {/* Place Details Dialog */}
        <Dialog open={!!selectedPlace} onOpenChange={() => setSelectedPlace(null)}>
          <DialogContent className="max-w-2xl">
            <DialogClose className="absolute right-6 top-6 rounded-full bg-red-500 hover:bg-red-600 text-white p-2 z-50">
              <X className="h-5 w-5" />
            </DialogClose>
            {selectedPlace && (
              <div className="pt-4">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-4">
                    {selectedPlace.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="text-foreground/80 leading-relaxed">
                  {selectedPlace.title}, often called the "Queen of Chotanagpur Plateau", is a serene hill station located in the Latehar district of Jharkhand, about 150 km from Ranchi. Nestled at an altitude of around 1,128 meters, it is famous for its pleasant climate, lush greenery, and breathtaking sunrise and sunset views.
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Empty slots for future destinations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-64 bg-muted rounded-2xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center group hover:border-primary/50 transition-colors duration-300 cursor-pointer"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-2xl text-muted-foreground group-hover:text-primary transition-colors duration-300">+</span>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  Coming Soon
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;