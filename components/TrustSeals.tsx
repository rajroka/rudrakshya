// components/home/TrustSeals.tsx

import { ShieldCheck, Gem, Globe } from 'lucide-react';

const TrustSeals = () => {
  const seals = [
    { icon: <ShieldCheck className="h-8 w-8 text-primary"/>, text: "100% Genuine Guarantee" },
    { icon: <Gem className="h-8 w-8 text-primary"/>, text: "Lab Certified Beads" },
    { icon: <Globe className="h-8 w-8 text-primary"/>, text: "Sourced from Nepal & Indonesia" },
  ];

  return (
    <section className="bg-background">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {seals.map((seal, index) => (
            <div key={index} className="flex items-center gap-4 p-4 rounded-lg">
              {seal.icon}
              <p className="font-semibold text-foreground/80">{seal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSeals;