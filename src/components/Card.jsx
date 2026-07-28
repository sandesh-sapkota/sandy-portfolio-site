/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef, drag = true }) => {
  return image && !text ? (
    <motion.img
      className={`absolute w-15 ${drag ? "cursor-grab" : "pointer-events-none"}`}
      src={image}
      alt=""
      style={style}
      whileHover={drag ? { scale: 1.05 } : undefined}
      drag={drag}
      dragConstraints={drag ? containerRef : undefined}
      dragElastic={drag ? 1 : undefined}
    />
  ) : (
    <motion.div
      className={`absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] ${
        drag ? "cursor-grab" : "pointer-events-none"
      }`}
      style={style}
      whileHover={drag ? { scale: 1.05 } : undefined}
      drag={drag}
      dragConstraints={drag ? containerRef : undefined}
      dragElastic={drag ? 1 : undefined}
    >
      {text}
    </motion.div>
  );
};

export default Card;
