import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const SkillCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.45, delay: index * 0.06, type: 'spring', stiffness: 150 }}
      whileHover={{ y: -8, transition: { duration: 0.25, type: 'spring', stiffness: 300 } }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className='relative rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default overflow-hidden'
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        border: hovered ? '1px solid rgba(99,102,241,0.45)' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered
          ? '0 16px 40px -8px rgba(99,102,241,0.25), 0 0 0 1px rgba(99,102,241,0.1)'
          : '0 2px 12px rgba(0,0,0,0.2)',
        transition: 'border 0.3s, box-shadow 0.3s',
      }}
    >
      {/* Shimmer overlay on hover */}
      <motion.div
        className='absolute inset-0 pointer-events-none'
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 200 : -200 }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.06) 50%, transparent 70%)',
        }}
      />

      {/* Glow dot top-right */}
      <motion.div
        className='absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-indigo-400'
        animate={{ opacity: hovered ? [0.5, 1, 0.5] : 0, scale: hovered ? [1, 1.5, 1] : 0 }}
        transition={{ duration: 1.2, repeat: hovered ? Infinity : 0 }}
      />

      {/* Icon */}
      <motion.div
        animate={{
          scale: hovered ? 1.2 : 1,
          rotate: hovered ? [0, -8, 8, 0] : 0,
          filter: hovered ? 'drop-shadow(0 0 8px rgba(99,102,241,0.6))' : 'drop-shadow(0 0 0px transparent)',
        }}
        transition={{ duration: 0.35, type: 'spring', stiffness: 250 }}
      >
        <img
          className='w-14 h-14 object-contain'
          src={item.image}
          alt={item.title}
        />
      </motion.div>

      {/* Title */}
      <motion.p
        className='font-medium text-sm'
        animate={{ color: hovered ? '#a5b4fc' : '#cbd5e1' }}
        transition={{ duration: 0.25 }}
      >
        {item.title}
      </motion.p>

      {/* Bottom glow line */}
      <motion.div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500'
        animate={{ width: hovered ? '70%' : '0%' }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div name='skills' className='w-full py-24 bg-[#0d1224] text-gray-300 relative overflow-hidden'>

      {/* Ambient glows */}
      <motion.div
        className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl pointer-events-none"
        animate={{ x: [0, -30, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      <div className='max-w-[1000px] mx-auto px-8 relative z-10'>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-4xl font-bold text-white inline-block relative'>
            Skills
            <motion.span
              className='absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </p>
          <motion.p
            className='text-slate-400 mt-6 text-base'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            Technologies I've worked with
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {skills.map((item, i) => (
            <SkillCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className='section-divider mt-24 max-w-[1000px] mx-auto' />
    </div>
  );
};

export default Skills;
