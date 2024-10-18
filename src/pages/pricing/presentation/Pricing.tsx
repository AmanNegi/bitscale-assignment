import { useState } from "react";
import { motion } from "framer-motion";

import TabBar from "./components/tabBar";
import { pricingData } from "../application/data";
import { PricingCard } from "./components/pricingCard";

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  return (
    <main className="container  mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-headingText text-center mb-8">
        Pricing
      </h1>
      <TabBar isAnnual={isAnnual} onToggle={setIsAnnual} />
      <div className="overflow-hidden">
        <button onClick={() => setIsAnnual(!isAnnual)}></button>
        <motion.div
          key={isAnnual ? "annual" : "monthly"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          {pricingData.slice(0, 4).map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Pricing;
