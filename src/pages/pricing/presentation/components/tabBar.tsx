import { FC } from "react";
import { motion } from "framer-motion";

interface TabBarProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
}

/**
 * TabBar present at top of the pricing page 
 */
const TabBar: FC<TabBarProps> = ({ isAnnual, onToggle }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-lightAccent p-1 rounded-lg">
        <div className="relative flex">
          {["monthly", "annual"].map((tab) => (
            <button
              key={tab}
              onClick={() => onToggle(tab === "annual")}
              className={`relative z-10 px-6 py-2 text-sm font-medium transition-colors duration-300 text-headingText`}
             text-headingText>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <motion.div
            className="absolute left-0 top-0 h-full bg-card rounded-md"
            initial={false}
            animate={{
              width: "50%",
              x: isAnnual ? "100%" : "0%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TabBar;