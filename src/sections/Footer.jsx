import { mySocials } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <Link to="/terms" className="hover:text-cyan-400 transition-colors">
          Terms & Conditions
        </Link>
        <p>|</p>
        <Link to="/privacy" className="hover:text-cyan-400 transition-colors">
          Privacy Policy
        </Link>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <motion.a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              rotate: 5,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
              rotate: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
            className="cursor-pointer"
          >
            <img
              src={social.icon}
              className="w-5 h-5 filter grayscale hover:grayscale-0 transition-all duration-300"
              alt={social.name}
            />
          </motion.a>
        ))}
      </div>
      <p>© {new Date().getFullYear()} Sandesh. All rights reserved.</p>
    </section>
  );
};

export default Footer;
