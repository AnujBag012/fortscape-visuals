import Navigation from "@/components/ui/navigation";
import { AlertTriangle } from "lucide-react";

const Rewards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 px-4 lg:px-8">
        <div className="container mx-auto py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Rewards for Discoveries</h1>
          
          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            If you come across any artifacts, beautiful pictures, or ancient items, you will be rewarded 
            with coins. These coins can be used to claim discounts on future travel packages or to shop 
            at selected partner stores.
          </p>

          {/* Disclaimer Section */}
          <div className="bg-muted/30 rounded-lg p-6 border border-border">
            <div className="flex items-start space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
            </div>
            <ul className="space-y-2 text-foreground/80 ml-9">
              <li>• All collected items must be submitted at our authorized center.</li>
              <li>• Items must not be taken by damaging or removing anything from architectural sites.</li>
              <li>• Any violation of this rule will lead to strict penalties and fines.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rewards;
