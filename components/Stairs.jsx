import { motion } from "framer-motion";

const stairAnimation = {
  intial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

//calculate the reverse index fat staggered delay
const reverseIndex = (index) => {
  const totalSteps = 4; //number of steps
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs. 
        Each div will have  the same animation defined by the stairsAnimation object.
        The delay for each div is calculated dinamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step.
  */}{" "}
      {[...Array(4)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
}
