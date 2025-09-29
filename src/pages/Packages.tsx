import Navigation from "@/components/ui/navigation";
import DestinationCard from "@/components/ui/destination-card";
import netarhatImage from "@/assets/netarhat.jpg";
import navratangarhImage from "@/assets/navratangarh-fort.jpg";
import jagannathImage from "@/assets/jagannath-temple.jpg";
import elaImage from "@/assets/ela-national-park.jpg";

const Packages = () => {
  const packages = [
    {
      title: "Netarhat Hill Station",
      description: "Queen of Chotanagpur - Experience breathtaking sunrises and sunsets",
      image: netarhatImage,
      rating: 4.8,
      price: "₹2,999"
    },
    {
      title: "Navratangarh Fort",
      description: "Historic fort with ancient architecture and panoramic views",
      image: navratangarhImage,
      rating: 4.6,
      price: "₹1,899"
    },
    {
      title: "Jagannath Temple",
      description: "Sacred temple with intricate carvings and spiritual significance",
      image: jagannathImage,
      rating: 4.9,
      price: "₹1,299"
    },
    {
      title: "Ela National Park",
      description: "Wildlife sanctuary with diverse flora and fauna",
      image: elaImage,
      rating: 4.7,
      price: "₹3,499"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Available Packages
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {packages.map((pkg, index) => (
                <DestinationCard
                  key={index}
                  title={pkg.title}
                  description={pkg.description}
                  image={pkg.image}
                  rating={pkg.rating}
                  price={pkg.price}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Packages;