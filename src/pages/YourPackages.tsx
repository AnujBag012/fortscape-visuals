import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import netarhatImage from "@/assets/netarhat.jpg";
import navratangarhImage from "@/assets/navratangarh-fort.jpg";

const YourPackages = () => {
  const navigate = useNavigate();

  const allPackages = [
    {
      id: "jagannath-temple",
      title: "Jagannath Temple",
      image: "/placeholder.svg",
    },
    {
      id: "netarhat",
      title: "Netarhat",
      image: netarhatImage,
    }
  ];

  const currentPackages = [
    {
      id: "netarhat",
      title: "Netarhat",
      image: netarhatImage,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 px-4 lg:px-8">
        <div className="container mx-auto py-12">
          {/* All Packages Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">All Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
              {allPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="relative overflow-hidden rounded-3xl h-64 cursor-pointer group"
                  onClick={() => navigate(`/package/${pkg.id}`)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-semibold">{pkg.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Packages Section */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Current Packages</h2>
            <div className="grid grid-cols-1 max-w-md">
              {currentPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="relative overflow-hidden rounded-3xl h-64 cursor-pointer group"
                  onClick={() => navigate(`/package/${pkg.id}`)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-white text-2xl font-semibold">{pkg.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default YourPackages;
