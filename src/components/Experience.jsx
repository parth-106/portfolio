import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../data/data';

const Experience = () => {
  return (
    <div id='experience' className='w-full py-24 bg-[#0d1224] text-slate-50'>
      <div className='max-w-[1000px] mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-slate-400 text-sm uppercase tracking-widest mb-3'>
            What I have done so far
          </p>
          <p className='text-4xl font-bold text-white inline-block relative'>
            Work Experience
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full' />
          </p>
        </motion.div>

        {/* Timeline */}
        <div className='relative'>
          {/* Vertical gradient line */}
          <div className='absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-indigo-500 via-pink-500 to-transparent hidden sm:block' />

          <div className='space-y-10'>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className='sm:pl-16 relative'
              >
                {/* Timeline dot */}
                <div className='absolute left-2 top-7 w-7 h-7 rounded-full btn-gradient hidden sm:flex items-center justify-center shadow-lg shadow-indigo-500/30'>
                  <FaBriefcase size={11} className='text-white' />
                </div>

                {/* Card */}
                <div className='glass rounded-2xl p-6 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300'>

                  {/* Header */}
                  <div className='flex flex-wrap items-center gap-4 mb-5'>
                    <div className='w-14 h-14 rounded-xl overflow-hidden glass flex items-center justify-center flex-shrink-0'>
                      <img
                        src={exp.icon}
                        width={exp.icon_width}
                        alt={exp.company_name}
                        className='object-contain'
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h3 className='text-xl font-bold text-white leading-tight'>{exp.title}</h3>
                      <p className='text-indigo-400 font-medium text-sm mt-0.5'>{exp.company_name}</p>
                    </div>
                    <span className='text-xs px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 whitespace-nowrap font-medium'>
                      {exp.date}
                    </span>
                  </div>

                  {/* Points */}
                  <ul className='space-y-2.5'>
                    {exp.points.map((point, j) => (
                      <li key={j} className='text-slate-400 text-sm leading-relaxed flex items-start gap-3'>
                        <span className='text-indigo-400 mt-1.5 flex-shrink-0 text-xs'>▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className='section-divider mt-24 max-w-[1000px] mx-auto' />
    </div>
  );
};

export default Experience;
