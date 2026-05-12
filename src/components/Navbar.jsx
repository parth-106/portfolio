import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { socialMedia, navlinks } from "../data/data";
import Resume from "../assets/Resume.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Main navbar ── */}
      <div
        className={`fixed w-full h-[70px] flex justify-between items-center px-6 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0d1224]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-pink-500 to-indigo-500"
          style={{ width: `${scrollProgress}%`, backgroundSize: "200% 100%" }}
          animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shadow-lg shadow-indigo-500/30"
            animate={{
              boxShadow: [
                "0 0 10px rgba(99,102,241,0.3)",
                "0 0 20px rgba(99,102,241,0.6)",
                "0 0 10px rgba(99,102,241,0.3)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white font-bold text-lg tracking-tight">
              PP
            </span>
          </motion.div>
        </motion.a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-0">
          {navlinks.map((link, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="relative px-4 py-2 text-slate-400 hover:text-white text-sm font-medium
                           transition-colors duration-200 cursor-pointer group block"
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5
                                 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-400
                                 transition-all duration-300 rounded-full"
                />
              </Link>
            </motion.li>
          ))}

          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + navlinks.length * 0.08, duration: 0.4 }}
            className="ml-2"
          >
            <motion.a
              href={Resume}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gradient px-4 py-2 rounded-lg text-sm font-semibold text-white
                         hover:opacity-90 transition-opacity inline-block"
            >
              Resume
            </motion.a>
          </motion.li>
        </ul>

        {/* Hamburger */}
        <motion.div
          onClick={() => setNav(!nav)}
          className="md:hidden z-50 cursor-pointer text-slate-300 hover:text-white"
          whileTap={{ scale: 0.85 }}
        >
          <AnimatePresence mode="wait">
            {nav ? (
              <motion.div
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="bar"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-[#0d1224]/97 backdrop-blur-xl
                         flex flex-col justify-center items-center gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  onClick={() => setNav(false)}
                  to="home"
                  smooth
                  duration={500}
                  className="text-3xl font-bold text-slate-300 hover:text-white cursor-pointer transition-colors"
                >
                  Home
                </Link>
              </motion.div>

              {navlinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                >
                  <Link
                    onClick={() => setNav(false)}
                    to={link.to}
                    smooth
                    duration={500}
                    className="text-3xl font-bold text-slate-300 hover:text-white cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href={Resume}
                download
                onClick={() => setNav(false)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.08 + navlinks.length * 0.07 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-8 py-3 rounded-xl text-white font-semibold text-lg
                           hover:opacity-90 transition-opacity mt-4"
              >
                Resume
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Social sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 z-30">
        <ul className="space-y-2">
          {socialMedia.map((social, i) => (
            <motion.li
              key={i}
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: -108, opacity: 1 }}
              transition={{
                delay: 0.8 + i * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ x: -8, transition: { duration: 0.25 } }}
              className="w-[160px] h-[52px] flex items-center glass rounded-r-xl px-3 cursor-pointer"
            >
              <a
                className="flex justify-between items-center w-full text-slate-300 hover:text-white transition-colors"
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-sm font-medium">{social.name}</span>
                <motion.span
                  className="text-indigo-400"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {social.svgIcon}
                </motion.span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
