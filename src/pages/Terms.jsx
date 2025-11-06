import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/#contact");
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-black">
      {/* Navbar spacing */}
      <div className="h-20 md:h-24" />

      <motion.div
        className="c-space py-16 md:py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Terms & Conditions
            </motion.h1>
            <motion.p
              className="text-neutral-400 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Last Updated: November 2025
            </motion.p>
          </div>

          {/* Content */}
          <motion.div
            className="space-y-8 text-neutral-300 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Welcome to My Portfolio Website
              </h2>
              <p className="text-neutral-400 text-lg">
                All content, including projects, code samples, writing, and
                visuals, are my original work unless stated otherwise. Any
                reproduction, distribution, or use of this content requires
                prior permission.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Website Usage
              </h2>
              <p className="text-neutral-400 text-lg">
                This website is intended for showcasing my skills and experience
                to potential clients, collaborators, and employers. I reserve
                the right to update or change any content without prior notice.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                User Responsibility
              </h2>
              <p className="text-neutral-400 text-lg">
                By using this site, you agree not to misuse the information or
                attempt to compromise the website`&apos;`s security.
                Unauthorized access, data scraping, or any malicious activities
                are strictly prohibited.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-neutral-400 text-lg">
                This website is provided &quot;as is&quot; without any warranties. I am
                not responsible for any indirect, incidental, or consequential
                damages resulting from the use of this website or its content.
              </p>
            </section>

            {/* Contact Section */}
            <section className="space-y-4 pt-6 mt-12 px-6 py-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-white">Questions?</h3>
              <p className="text-neutral-400">
                If you have any questions about these Terms & Conditions, please{" "}
                <button
                  onClick={handleContactClick}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold cursor-pointer"
                >
                  contact me
                </button>
              </p>
            </section>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer spacing */}
      <div className="h-12" />
    </div>
  );
};

export default Terms;
