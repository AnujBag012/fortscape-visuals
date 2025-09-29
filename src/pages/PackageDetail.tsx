import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";

const PackageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = {
    title: "Netarhat Tour",
    description: "Netarhat, often called the \"Queen of Chotanagpur Plateau\", is a serene hill station located in the Latehar district of Jharkhand, about 150 km from Ranchi. Nestled at an altitude of around 1,128 meters, it is famous for its pleasant climate, lush greenery, and breathtaking sunrise and sunset views.",
    tourPackageIncludes: [
      "Adventure Trail (₹6,800 per person)",
      "Sunrise trekking at Netarhat Sunrise Point with guide (₹1,200).",
      "Cycle ride through valley trails (+₹1,500).",
      "Breakfast + tribal lunch combo at Aangan Dhaba (₹800).",
      "Visit to Upper Ghaghri & Lower Ghaghri waterfalls (₹1,200).",
      "Professional photography assistance (₹2,100)."
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 px-4 lg:px-8">
        <div className="container mx-auto py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">{packageData.title}</h1>
          
          <div className="mb-8">
            <p className="text-xl mb-2">
              Description: <span className="font-bold">{packageData.title.split(" ")[0]}</span>
            </p>
            <p className="text-foreground/80 leading-relaxed">
              {packageData.description}
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Tour Package Includes:</h2>
            <div className="space-y-2">
              {packageData.tourPackageIncludes.map((item, index) => (
                <p key={index} className="text-foreground/80">{item}</p>
              ))}
            </div>
          </div>

          {/* Fun Section */}
          <section className="mt-16">
            <h2 className="text-4xl font-bold text-foreground mb-8">FUN SECTION</h2>
            <div 
              className="relative h-64 rounded-3xl overflow-hidden cursor-pointer group"
              onClick={() => navigate("/rewards")}
            >
              <img
                src="/placeholder.svg"
                alt="Fun activities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-5xl font-bold tracking-wide">START THE TASK</h3>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PackageDetail;
