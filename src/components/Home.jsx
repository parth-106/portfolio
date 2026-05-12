import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaArrowCircleUp } from 'react-icons/fa';

/* ── Floating particle ────────────────────────────────────── */
const FloatDot = ({ style, delay = 0 }) => (
  <motion.div
    className='absolute rounded-full bg-indigo-500/20 pointer-events-none'
    style={style}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1] }}
    transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const Home = () => {
  return (
    <div name='home' className='relative w-full h-screen bg-[#0d1224] overflow-hidden flex items-center'>

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Floating particles */}
      <FloatDot style={{ width: 8, height: 8, top: '20%', left: '10%' }} delay={0} />
      <FloatDot style={{ width: 5, height: 5, top: '60%', left: '80%' }} delay={1.5} />
      <FloatDot style={{ width: 6, height: 6, top: '80%', left: '25%' }} delay={0.8} />
      <FloatDot style={{ width: 4, height: 4, top: '35%', right: '12%' }} delay={2.2} />
      <FloatDot style={{ width: 7, height: 7, bottom: '20%', right: '30%' }} delay={1} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className='relative max-w-[1000px] mx-auto px-8 w-full'>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-indigo-400 font-medium tracking-[0.2em] uppercase text-sm mb-3'
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className='text-5xl sm:text-7xl font-bold text-white leading-tight'
        >
          Parth Patel
        </motion.h1>

        {/* Typewriter line */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className='text-4xl sm:text-6xl font-bold text-gradient mt-2'
        >
          Web Developer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className='text-slate-400 py-6 max-w-[580px] text-lg leading-relaxed'
        >
          I specialize in crafting high-performance, responsive web applications.
          With a focus on clean design and seamless user experiences, I build
          modern solutions that deliver real impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className='flex gap-4 flex-wrap'
        >
          <motion.a href="#works" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <button className='group btn-gradient px-8 py-3.5 rounded-xl font-semibold text-white
                               flex items-center gap-3 hover:opacity-90 transition-all duration-300
                               shadow-lg shadow-indigo-500/25'>
              View My Work
              <HiArrowNarrowRight
                className='group-hover:translate-x-1.5 transition-transform duration-300'
                size={18}
              />
            </button>
          </motion.a>

          <motion.a href="mailto:ganeshshirke81923@gmail.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <button className='px-8 py-3.5 rounded-xl font-semibold text-slate-300 border border-white/10
                               hover:border-indigo-400/50 hover:text-white transition-all duration-300 glass'>
              Hire Me
            </button>
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-10 left-8 flex flex-col items-center gap-2'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className='text-slate-600 text-xs tracking-widest uppercase'>Scroll</span>
          <motion.div
            className='w-px h-10 bg-gradient-to-b from-indigo-400 to-transparent'
            animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Scroll to top */}
      <div className='fixed bottom-6 right-6 z-50'>
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 rounded-full btn-gradient flex items-center justify-center
                     shadow-lg shadow-indigo-500/30"
          aria-label="Scroll to top"
          whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaArrowCircleUp size={18} className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
