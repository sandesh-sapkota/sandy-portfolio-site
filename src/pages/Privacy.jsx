import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
              Privacy Policy
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
              <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
              <p className="text-neutral-400 text-lg">
                This website does not collect personal data unless you submit it voluntarily through the contact form. We respect your privacy and take data protection seriously.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Form Information</h2>
              <p className="text-neutral-400 text-lg">
                If you send a message, your name, email, and message will only be used to respond to your inquiry and will not be shared with third parties. Your information is protected and will not be used for any other purposes.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies & Analytics</h2>
              <p className="text-neutral-400 text-lg">
                Cookies or analytics tools may be used to improve your browsing experience and understand how visitors interact with the site. You can disable cookies at any time through your browser settings.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p className="text-neutral-400 text-lg">
                This website may contain links to third-party websites. I am not responsible for the privacy practices of external sites. Please review their privacy policies before sharing any information.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4 pt-4 border-t border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-neutral-400 text-lg">
                I am committed to maintaining the security of your personal information. However, no method of transmission over the internet is 100% secure. Use this site at your own risk.
              </p>
            </section>

            {/* Contact Section */}
            <section className="space-y-4 pt-6 mt-12 px-6 py-8 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20">
              <h3 className="text-xl font-bold text-white">Privacy Concerns?</h3>
              <p className="text-neutral-400">
                If you have any questions regarding your data privacy, feel free to{" "}
                <button onClick={handleContactClick} className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold cursor-pointer">
                  contact me
                </button>
                {" "}using the details provided in the contact section.
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

export default Privacy;
