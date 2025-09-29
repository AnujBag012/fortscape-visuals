import DestinationCard from "@/components/ui/destination-card";

const TouristSpotsSection = () => {
  return (
    <section className="py-20 bg-muted/30" id="tourist-spots">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Famous Tourist Spots
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore more incredible destinations that showcase the diverse beauty and cultural richness of the region.
          </p>
        </div>

        {/* Placeholder grid for future tourist spots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-64 bg-background rounded-2xl border-2 border-dashed border-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-3xl text-primary">🏛️</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  New Destination
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exciting new spots coming soon to enhance your travel experience
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              We're constantly adding new destinations. Contact us for custom travel recommendations!
            </p>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristSpotsSection;