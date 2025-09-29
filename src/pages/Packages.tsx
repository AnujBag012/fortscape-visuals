import { useState } from "react";
import Navigation from "@/components/ui/navigation";
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
import navratangarhImage from "@/assets/navratangarh-fort.jpg";
import jagannathImage from "@/assets/jagannath-temple.jpg";
import elaImage from "@/assets/ela-national-park.jpg";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
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
                <div key={index} onClick={() => setSelectedPackage(pkg)}>
                  <DestinationCard
                    title={pkg.title}
                    description={pkg.description}
                    image={pkg.image}
                    rating={pkg.rating}
                    price={pkg.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Package Details Dialog */}
        <Dialog open={!!selectedPackage} onOpenChange={() => setSelectedPackage(null)}>
          <DialogContent className="max-w-2xl">
            <DialogClose className="absolute right-6 top-6 rounded-full bg-red-500 hover:bg-red-600 text-white p-2 z-50">
              <X className="h-5 w-5" />
            </DialogClose>
            {selectedPackage && (
              <div className="pt-4">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-6">
                    {selectedPackage.title.replace(" Hill Station", " Tour Package")}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-lg">
                    <span className="font-semibold">Adventure Trail (₹6,800 per person)</span>
                  </p>
                  <p className="text-foreground/80">Sunrise trekking at Netarhat Sunrise Point with guide (₹1,200).</p>
                  <p className="text-foreground/80">Cycle ride through valley trails (+₹1,500).</p>
                  <p className="text-foreground/80">Breakfast + tribal lunch combo at Aangan Dhaba (₹800).</p>
                  <p className="text-foreground/80">Visit to Upper Ghaghri & Lower Ghaghri waterfalls (₹1,200).</p>
                  <p className="text-foreground/80">Professional photography assistance (₹2,100).</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Packages;