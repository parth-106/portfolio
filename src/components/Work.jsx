import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdVerified } from 'react-icons/md';
import { data } from '../data/data.js';

/* ── SVG icon set ─────────────────────────────────────────── */
const icons = {
  chart: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <rect x="6" y="38" width="10" height="18" rx="3" fill="white" fillOpacity="0.9"/>
      <rect x="22" y="26" width="10" height="30" rx="3" fill="white" fillOpacity="0.75"/>
      <rect x="38" y="14" width="10" height="42" rx="3" fill="white" fillOpacity="0.6"/>
      <polyline points="11,37 27,24 43,12 55,6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="55" cy="6" r="3" fill="white"/>
      <line x1="6" y1="58" x2="58" y2="58" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  ),
  jobs: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <rect x="8" y="10" width="48" height="12" rx="4" fill="white" fillOpacity="0.9"/>
      <rect x="8" y="28" width="36" height="12" rx="4" fill="white" fillOpacity="0.7"/>
      <rect x="8" y="46" width="24" height="12" rx="4" fill="white" fillOpacity="0.5"/>
      <circle cx="52" cy="34" r="7" fill="white" fillOpacity="0.9"/>
      <polyline points="48,34 51,37 56,31" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="52" cy="52" r="7" fill="white" fillOpacity="0.6"/>
      <line x1="49" y1="52" x2="55" y2="52" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  policy: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <rect x="12" y="6" width="36" height="48" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.6" strokeWidth="2"/>
      <rect x="12" y="6" width="36" height="14" rx="5" fill="white" fillOpacity="0.3"/>
      <line x1="20" y1="28" x2="44" y2="28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="36" x2="44" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="20" y1="44" x2="34" y2="44" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="49" cy="49" r="10" fill="white" fillOpacity="0.9"/>
      <polyline points="44,49 47,52 54,44" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sign: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <rect x="8" y="8" width="40" height="48" rx="5" fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.6" strokeWidth="2"/>
      <line x1="16" y1="22" x2="40" y2="22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
      <line x1="16" y1="30" x2="40" y2="30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
      <path d="M16 44 Q22 36 26 44 Q30 52 36 40" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M46 10 L54 18 L34 38 L26 40 L28 32 Z" fill="white" fillOpacity="0.9"/>
      <line x1="44" y1="12" x2="52" y2="20" stroke="#10b981" strokeWidth="1.5"/>
    </svg>
  ),
  security: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <path d="M32 6 L54 14 L54 34 C54 46 44 56 32 60 C20 56 10 46 10 34 L10 14 Z" fill="white" fillOpacity="0.2" stroke="white" strokeOpacity="0.8" strokeWidth="2"/>
      <path d="M32 10 L50 17 L50 34 C50 44 42 52 32 56 C22 52 14 44 14 34 L14 17 Z" fill="white" fillOpacity="0.1"/>
      <text x="32" y="38" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white" fontFamily="monospace">SQL</text>
      <line x1="20" y1="42" x2="44" y2="42" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round"/>
      <circle cx="32" cy="26" r="5" fill="white" fillOpacity="0.8"/>
      <line x1="32" y1="10" x2="32" y2="20" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
    </svg>
  ),
  access: (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
      <circle cx="32" cy="12" r="7" fill="white" fillOpacity="0.9"/>
      <line x1="32" y1="19" x2="32" y2="38" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="14" y1="28" x2="50" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="38" x2="20" y2="56" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <line x1="32" y1="38" x2="44" y2="56" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="10" cy="28" r="4" fill="white" fillOpacity="0.5"/>
      <circle cx="54" cy="28" r="4" fill="white" fillOpacity="0.5"/>
    </svg>
  ),
};

/* ── Floating particle ────────────────────────────────────── */
const Particle = ({ style }) => (
  <motion.div
    className="absolute rounded-full bg-white/20"
    style={style}
    animate={{ y: [0, -18, 0], opacity: [0.4, 0.9, 0.4] }}
    transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
  />
);

/* ── Card ─────────────────────────────────────────────────── */
const ProjectCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden flex flex-col cursor-default"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        border: hovered ? '1px solid rgba(99,102,241,0.5)' : '1px solid rgba(255,255,255,0.08)',
        boxShadow: hovered
          ? '0 20px 60px -10px rgba(99,102,241,0.25), 0 0 0 1px rgba(99,102,241,0.1)'
          : '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'border 0.3s, box-shadow 0.3s',
      }}
    >
      {/* ── Gradient banner ── */}
      <div className={`relative h-40 bg-gradient-to-br ${item.gradient} overflow-hidden flex items-center justify-center`}>

        {/* Animated background blobs */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-white/10 blur-xl"
          animate={{ x: hovered ? 10 : 0, y: hovered ? -10 : 0, scale: hovered ? 1.2 : 1 }}
          transition={{ duration: 0.6 }}
          style={{ top: '-20%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-black/15 blur-xl"
          animate={{ x: hovered ? -10 : 0, y: hovered ? 10 : 0, scale: hovered ? 1.3 : 1 }}
          transition={{ duration: 0.6 }}
          style={{ bottom: '-20%', right: '-10%' }}
        />

        {/* Floating particles */}
        <Particle style={{ width: 6, height: 6, bottom: '20%', left: '15%' }} />
        <Particle style={{ width: 4, height: 4, top: '20%', right: '20%' }} />
        <Particle style={{ width: 5, height: 5, top: '50%', left: '70%' }} />

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Icon */}
        <motion.div
          animate={{ scale: hovered ? 1.15 : 1, rotate: hovered ? 5 : 0 }}
          transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
          className="z-10 drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.3))' }}
        >
          {icons[item.icon]}
        </motion.div>

        {/* Verified badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-md
                     text-white text-[10px] font-semibold px-2.5 py-1 rounded-full
                     border border-white/20"
        >
          <MdVerified size={11} className="text-white" />
          Industry Project
        </motion.div>

        {/* Bottom shine line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>

      {/* ── Card body ── */}
      <div className="p-5 flex flex-col flex-1">
        <motion.h3
          className="text-white font-bold text-sm leading-snug mb-3"
          animate={{ color: hovered ? '#a5b4fc' : '#ffffff' }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.h3>

        <p className="text-slate-400 text-xs leading-relaxed flex-1">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {item.tags.map((tag, t) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.08 + t * 0.04 }}
              whileHover={{ scale: 1.08 }}
              className="text-[10px] px-2.5 py-1 rounded-full font-medium cursor-default"
              style={{
                background: 'rgba(99,102,241,0.12)',
                color: '#a5b4fc',
                border: '1px solid rgba(99,102,241,0.25)',
              }}
            >
              #{tag.name}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  );
};

/* ── Section ──────────────────────────────────────────────── */
const Work = () => {
  return (
    <div name='work' id='works' className='w-full py-24 bg-[#0d1224] text-gray-300 relative overflow-hidden'>

      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />

      <div className='max-w-[1100px] mx-auto px-8 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='mb-14'
        >
          <motion.p
            className='text-4xl font-bold text-white inline-block relative'
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projects
            <motion.span
              className='absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.p>
          <motion.p
            className='text-slate-400 mt-6 text-base'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Industry projects I've built and shipped at{' '}
            <span className="text-indigo-400 font-semibold">Implevision Technologies</span>
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {data.map((item, index) => (
            <ProjectCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
