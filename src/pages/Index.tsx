import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import PlacesSection from "@/components/sections/places-section";
import TouristSpotsSection from "@/components/sections/tourist-spots-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <PlacesSection />
        <TouristSpotsSection />
      </main>
    </div>
  );
};

export default Index;
