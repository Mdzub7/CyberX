import React from 'react';
import { Shield, Lock, Search, AlertTriangle, Zap, Database, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: <Shield className="w-12 h-12 text-cyan-400" />,
      title: 'Website Security Analysis',
      description: 'Comprehensive security assessment of websites including SSL verification, domain analysis, and content scanning.',
      features: [
        'SSL Certificate Verification',
        'Domain Age Check',
        'Security Headers Analysis',
        'Mixed Content Detection',
      ],
    },
    {
      icon: <Search className="w-12 h-12 text-cyan-400" />,
      title: 'Scam Detection',
      description: 'Advanced algorithms to identify potential scams and fraudulent websites before you become a victim.',
      features: [
        'Phishing Detection',
        'Malware Scanning',
        'Reputation Check',
        'Blacklist Monitoring',
      ],
    },
    {
      icon: <Database className="w-12 h-12 text-cyan-400" />,
      title: 'Security Reports',
      description: 'Detailed reports with actionable insights about website security and potential threats.',
      features: [
        'Comprehensive Analysis',
        'Risk Assessment',
        'Security Recommendations',
        'Historical Data',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{' '}
            <motion.span
              animate={{ 
                color: ['#22d3ee', '#0ea5e9', '#22d3ee'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-cyan-400"
            >
              Services
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Protect yourself and your business with our comprehensive website security services.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.1)"
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg transition-all group"
            >
              <motion.div 
                className="mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>
              <motion.h3 
                className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors"
              >
                {service.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {service.description}
              </motion.p>
              <motion.ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-gray-300 group/item"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="text-cyan-400"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                    </motion.div>
                    <span className="group-hover/item:text-cyan-400 transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.1)" }}
          className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8 text-center relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 relative">
            Need Custom Security Solutions?
          </h2>
          <p className="text-gray-400 mb-6 relative">
            Contact our team for personalized security solutions tailored to your needs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg transition-all font-medium inline-flex items-center gap-2 group relative"
          >
            Contact Us
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}