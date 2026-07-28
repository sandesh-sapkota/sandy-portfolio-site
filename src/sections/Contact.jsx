import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to alert
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Form submitted:", formData);
      await emailjs.send(
        "service_e2w8dul",      // Gmail Service ID
        "template_vjivk46",     // Your template ID
        {
          from_name: formData.name,                       // {{name}}
          from_email: formData.email,                     // {{email}}
          to_name: "Sandesh",                             // Optional
          to_email: "sapkotasandeshlive12@gmail.com",    // Your Gmail
          message: formData.message,                      // {{message}}
          title: "Portfolio Contact Form",               // {{title}} for subject
        },
         "Vrv3HLe40NAh6edPc"   // EmailJS Public Key / User ID
      );

      setIsLoading(false);
      setTimeout(() => setFormData({ name: "", email: "", message: "" }), 500);
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log("EmailJS Error:", error.text || error);
      showAlertMessage("danger", "Something went wrong!");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
          <Particles
            className="absolute inset-0 -z-50"
            quantity={isMobile ? 12 : 40}
            ease={80}
            color={"#ffffff"}
            refresh
          />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-8 mx-auto border border-black/10 dark:border-white/10 rounded-2xl bg-white/90 dark:bg-gradient-to-br dark:from-neutral-900/80 dark:via-neutral-850/80 dark:to-black/80 shadow-2xl backdrop-blur-xl hover:border-cyan-500/40 dark:hover:border-cyan-400/30 transition-all duration-300">
        <div className="flex flex-col items-start w-full gap-4 mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Let&apos;s Connect</h2>
          <p className="font-normal text-slate-600 dark:text-neutral-400 leading-relaxed text-sm">
            Ready to collaborate? Drop me a message and let&apos;s create something amazing together.
          </p>
        </div>
        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="field-label text-sm font-semibold text-slate-700 dark:text-neutral-300 block mb-2">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus w-full px-4 py-2.5 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-neutral-500 focus:border-cyan-400/50 focus:outline-none transition-all"
              placeholder="Sandy Sapkota"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="field-label text-sm font-semibold text-slate-700 dark:text-neutral-300 block mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus w-full px-4 py-2.5 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-neutral-500 focus:border-cyan-400/50 focus:outline-none transition-all"
              placeholder="Sandy@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="field-label text-sm font-semibold text-slate-700 dark:text-neutral-300 block mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus w-full px-4 py-2.5 rounded-lg bg-slate-900/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-neutral-500 focus:border-cyan-400/50 focus:outline-none transition-all resize-none"
              placeholder="Share your thoughts..."
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Message"
            />
          </div>
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 text-base font-semibold text-center rounded-lg cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 disabled:opacity-50 mt-2 transition-all"
            whileHover={!isLoading ? {
              scale: 1.02,
              boxShadow: "0 0 11px rgba(34, 211, 238, 0.6)",
            } : {}}
            whileTap={!isLoading ? {
              scale: 0.98,
            } : {}}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15,
            }}
          >
            {!isLoading ? (
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ letterSpacing: "0.05em" }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.div>
            ) : (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ⏳
              </motion.div>
            )}
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
