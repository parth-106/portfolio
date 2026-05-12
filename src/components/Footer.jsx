import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { navlinks } from "../data/data";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaHeart,
} from "react-icons/fa";

const socialIcons = [
  {
    icon: <FaLinkedin size={17} />,
    href: "https://www.linkedin.com/in/parth-patel-8b3807a2/",
    label: "LinkedIn",
  },
  {
    icon: <FaGithub size={17} />,
    href: "https://github.com/parth-106",
    label: "GitHub",
  },
  {
    icon: <FaInstagram size={17} />,
    href: "https://www.instagram.com/__patel.parth__/",
    label: "Instagram",
  },
  {
    icon: <FaWhatsapp size={17} />,
    href: "https://wa.me/8898916680",
    label: "WhatsApp",
  },
];

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-[#080e1a] overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gradient top border */}
      <motion.div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, #6366f1, #ec4899, #6366f1, transparent)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1000px] mx-auto px-8 py-10 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-1.5 text-sm text-slate-500"
          >
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-gradient font-semibold">Parth Patel</span>
            <span>— Made with</span>
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHeart size={12} className="text-pink-500 inline" />
            </motion.span>
          </motion.div>

          {/* Nav links */}
          <motion.div
            className="flex flex-wrap justify-center gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {navlinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.07 }}
              >
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  className="relative text-sm text-slate-500 hover:text-indigo-400 cursor-pointer
                             transition-colors duration-200 group"
                >
                  {link.name}
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px
                                   bg-gradient-to-r from-indigo-400 to-pink-400
                                   transition-all duration-300 rounded-full"
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {socialIcons.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3 + i * 0.07,
                  type: "spring",
                  stiffness: 250,
                }}
                whileHover={{ scale: 1.25, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400
                           hover:text-indigo-400 transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
