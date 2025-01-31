import React, { useState } from 'react';
import { Mail, Github, Twitter, MapPin, Send, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ submitted: false, sending: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitted: false, sending: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormStatus({ submitted: true, sending: false });
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: 'mdzub7@gmail.com',
      link: 'mailto:mdzub7@gmail.com',
    },
    {
      icon: <div className="flex space-x-3">
        <Github className="w-6 h-6" />
        <Twitter className="w-6 h-6" />
      </div>,
      title: 'Social Links',
      details: '@mdzub7',
      links: [
        { url: 'https://github.com/mdzub7', icon: <Github className="w-4 h-4" /> },
        { url: 'https://twitter.com/mdzub7', icon: <Twitter className="w-4 h-4" /> }
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      details: 'Bengaluru, India',
      link: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in{' '}
            <motion.span
              animate={{ 
                color: ['#22d3ee', '#0ea5e9', '#22d3ee'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-cyan-400"
            >
              Touch
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Have questions? Feel free to reach out. I'm here to help!
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-400 transition-all group"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400 mb-4 flex justify-center"
              >
                {info.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-400 mb-2">{info.details}</p>
              {info.links ? (
                <div className="flex justify-center space-x-4">
                  {info.links.map((link, idx) => (
                    <motion.a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              ) : info.link && (
                <motion.a
                  href={info.link}
                  whileHover={{ x: 5 }}
                  className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1"
                >
                  <span>View</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg transition-all font-medium flex items-center justify-center space-x-2"
            >
              {formStatus.sending ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Send className="w-5 h-5" />
                </motion.div>
              ) : (
                <Send className="w-5 h-5" />
              )}
              <span>{formStatus.sending ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </form>

          {formStatus.submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-cyan-400/10 border border-cyan-400/20 rounded-lg text-cyan-400 text-center"
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          )}
          <div className="mt-12 p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Need Immediate Assistance?</h3>
            <p className="text-gray-400 mb-4">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300"
            >
              <span>Visit our Help Center</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}