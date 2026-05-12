import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const contactLinks = [
  {
    icon: <FaEnvelope className='text-indigo-400' size={16} />,
    label: 'patelparth106@gmail.com',
    href: 'mailto:patelparth106@gmail.com',
  },
  {
    icon: <FaLinkedin className='text-indigo-400' size={16} />,
    label: 'linkedin.com/in/parth-patel',
    href: 'https://www.linkedin.com/in/parth-patel-8b3807a2/',
  },
  {
    icon: <FaGithub className='text-indigo-400' size={16} />,
    label: 'github.com/parth-106',
    href: 'https://github.com/parth-106',
  },
];

const SuccessModal = ({ onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4'
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.7, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.7, opacity: 0, y: 40 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className='bg-[#0d1224] border border-indigo-500/30 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl shadow-indigo-500/20'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='text-6xl mb-4 flex justify-center gap-2'>
        <motion.span
          animate={{ rotate: [0, -20, 20, -10, 10, 0], scale: [1, 1.2, 1.2, 1.1, 1.1, 1] }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >🎉</motion.span>
        <motion.span
          animate={{ rotate: [0, 20, -20, 10, -10, 0], scale: [1, 1.3, 1.3, 1.1, 1.1, 1] }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >✉️</motion.span>
        <motion.span
          animate={{ rotate: [0, -20, 20, -10, 10, 0], scale: [1, 1.2, 1.2, 1.1, 1.1, 1] }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >🎊</motion.span>
      </div>

      <h2 className='text-2xl font-bold text-white mb-2'>Message Sent!</h2>
      <p className='text-slate-400 text-sm leading-relaxed mb-6'>
        Congratulations! Your message has been delivered successfully. I'll get back to you as soon as possible. 🚀
      </p>

      <button
        onClick={onClose}
        className='btn-gradient px-8 py-2.5 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25 text-sm'
      >
        Awesome! 🙌
      </button>
    </motion.div>
  </motion.div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        'service_vmutz1j',
        'template_a863l76',
        {
          from_name: form.name,
          to_name: 'Parth Patel',
          from_email: form.email,
          to_email: 'patelparth106@gmail.com',
          message: form.message,
          client_email: form.email,
        },
        'hOguolAynZZJxY8Zz'
      )
      .then(
        () => {
          setLoading(false);
          setShowModal(true);
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.log('Could not send message - ' + error);
          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
    {showModal && <SuccessModal onClose={() => setShowModal(false)} />}
    <div name='contact' className='w-full py-24 bg-[#0d1224]'>
      <div className='max-w-[1000px] mx-auto px-8'>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-14'
        >
          <p className='text-4xl font-bold text-white inline-block relative'>
            Contact
            <span className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full' />
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 gap-12 items-start'>

          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className='text-2xl font-bold text-white mb-4'>
              Let's work together
            </h3>
            <p className='text-slate-400 leading-relaxed mb-8'>
              I'm currently open to new opportunities. Whether you have a
              project in mind or just want to say hi, my inbox is always open!
            </p>

            <div className='space-y-4'>
              {contactLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-3 text-slate-400 hover:text-indigo-300 transition-colors duration-200 group'
                >
                  <span className='w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors'>
                    {item.icon}
                  </span>
                  <span className='text-sm'>{item.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            method='POST'
            ref={formRef}
            onSubmit={handleSubmit}
            className='space-y-4'
          >
            <div>
              <label className='block text-slate-400 text-sm font-medium mb-1.5'>Name</label>
              <input
                className='w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-all duration-200'
                type='text'
                required
                placeholder='Your name'
                name='name'
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='block text-slate-400 text-sm font-medium mb-1.5'>Email</label>
              <input
                className='w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-all duration-200'
                type='email'
                required
                placeholder='your@email.com'
                name='email'
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className='block text-slate-400 text-sm font-medium mb-1.5'>Message</label>
              <textarea
                className='w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm transition-all duration-200 resize-none'
                name='message'
                required
                rows='5'
                placeholder='Your message...'
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full btn-gradient py-3.5 rounded-xl font-semibold text-white
                         hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25
                         flex items-center justify-center gap-2 disabled:opacity-60'
            >
              <FaPaperPlane size={14} />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
