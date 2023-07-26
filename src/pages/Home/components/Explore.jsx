import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles";
import { staggerContainer } from "../../../utils/motion";
import { TitleText, TypingText } from "./secondary/CustomTexts";
import ExploreCard from "./secondary/ExploreCard";

const exploreWorlds = [
  {
    id: "datastructures",
    imgUrl: "/DataTree.png",
    title: "Data Structures",
  },
  {
    id: "algorithms",
    imgUrl: "/Algorithms.png",
    title: "Algorithms",
  },
  {
    id: "physics",
    imgUrl: "/planet-05.png",
    title: "Physics",
  },
];

const Explore = () => {
  const [active, setActive] = useState("algorithms");

  return (
    <section className={`py-5`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Explore" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
