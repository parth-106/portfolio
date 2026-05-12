import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaMobileAlt, FaRocket } from 'react-icons/fa';

const features = [
  {
    icon: <FaCode size={20} />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code following best practices.',
  },
  {
    icon: <FaMobileAlt size={20} />,
    title: 'Responsive Design',
    desc: 'Pixel-perfect UI that works beautifully across all devices.',
  },
  {
    icon: <FaRocket size={20} />,
    title: 'Performance',
    desc: 'Optimized apps for the fastest and smoothest user experience.',
  },
];

/* ── Animated counter ─────────────────────────────────────── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const steps = 40;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  return (
    <div name='about' className='w-full py-24 bg-[#0d1224] text-gray-300 relative overflow-hidden'>

      {/* Ambient background glows */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 rounded-full bg-indigo-500/6 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-pink-500/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
            About Me
            <motion.span
              className='absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full'
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-12 items-start'>

          {/* Left: intro text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h3
              className='text-2xl font-bold text-white mb-4'
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Hi, I'm Parth Patel 👋
            </motion.h3>

            {['I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.',
              "What would you do if you had a software expert available at your fingertips? Let's build something amazing together."
            ].map((text, i) => (
              <motion.p
                key={i}
                className='text-slate-400 leading-relaxed mb-4'
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                {text}
              </motion.p>
            ))}

            {/* Stats */}
            <div className='flex gap-8 mt-8'>
              {[
                { value: 5, suffix: '+', label: 'Years Exp.' },
                { value: 6, suffix: '+', label: 'Projects' },
                { value: 1, suffix: '',  label: 'Companies' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className='text-center group cursor-default'
                  initial={{ opacity: 0, scale: 0.7, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.12, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <p className='text-3xl font-bold text-gradient'>
                    <Counter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className='text-slate-500 text-sm mt-1 group-hover:text-slate-400 transition-colors'>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: feature cards */}
          <div className='space-y-4'>
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ x: 8, transition: { duration: 0.25 } }}
                className='glass rounded-xl p-5 flex items-start gap-4 group cursor-default'
                style={{ transition: 'border 0.3s, box-shadow 0.3s' }}
              >
                {/* Icon box */}
                <motion.div
                  className='w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center
                             text-indigo-400 flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors'
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feat.icon}
                </motion.div>

                <div>
                  <h4 className='font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300'>
                    {feat.title}
                  </h4>
                  <p className='text-slate-400 text-sm leading-relaxed'>{feat.desc}</p>
                </div>

                {/* Hover glow */}
                <motion.div
                  className='absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                  style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className='section-divider mt-24 max-w-[1000px] mx-auto' />
    </div>
  );
};

export default About;
