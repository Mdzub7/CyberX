import React from 'react';
import { Shield, Lock, AlertTriangle, Zap, ChevronDown, ExternalLink } from 'lucide-react';
import UrlChecker from '../components/UrlChecker';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      title: 'Advanced Security Analysis',
      description: 'Comprehensive security checks using multiple verification methods.',
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: 'SSL Verification',
      description: 'Verify SSL certificates and security protocols.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-cyan-400" />,
      title: 'Scam Detection',
      description: 'Identify potential scams and fraudulent websites.',
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'Real-time Results',
      description: 'Get instant analysis and detailed security reports.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.2 }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
      >
        <motion.div 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-16 space-y-4" // Increased bottom margin
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <TypeAnimation
              sequence={[
                'Stay Safe Online with',
                1000,
                'Secure Your Browsing with',
                1000,
                'Protect Yourself with',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              CyberX
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Verify websites instantly and protect yourself from online scams with our advanced security analysis.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-3xl px-4" // Added width constraints
        >
          <UrlChecker />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2 }}
          className="absolute bottom-10 cursor-pointer"
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </motion.section>

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-black/50"
      >
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Why Choose <span className="text-cyan-400">CyberX</span>?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)"
                }}
                className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg transition-all duration-300"
              >
                <motion.div 
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-950/30"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            How It <span className="text-cyan-400">Works</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Enter URL', 'Analyze', 'Get Results'].map((step, index) => (
              <motion.div
                key={step}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)"
                }}
                className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg transition-all duration-300"
              >
                <motion.div 
                  className="text-4xl font-bold text-cyan-400 mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-4"
      >
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Trusted by <span className="text-cyan-400">10,000+</span> Users Worldwide
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Microsoft', 'Google', 'Amazon', 'Meta'].map((company) => (
              <motion.div
                key={company}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(34, 211, 238, 0.1)"
                }}
                className="p-4 bg-gray-900/50 border border-cyan-500/20 rounded-lg group transition-all duration-300"
              >
                <motion.p 
                  className="text-gray-400 flex items-center justify-center gap-2 group-hover:text-cyan-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {company}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}