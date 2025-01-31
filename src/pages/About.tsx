import React, { useState, useEffect } from 'react';
import { Shield, Users, Target, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev % 4) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <Shield className="w-6 h-6" />, value: '10M+', label: 'Websites Analyzed' },
    { icon: <Users className="w-6 h-6" />, value: '50K+', label: 'Active Users' },
    { icon: <Target className="w-6 h-6" />, value: '99.9%', label: 'Accuracy Rate' },
    { icon: <Award className="w-6 h-6" />, value: '24/7', label: 'Support' },
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    },
    {
      name: 'Emily Watson',
      role: 'Head of Security',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="container mx-auto">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{' '}
            <motion.span
              animate={{ 
                color: ['#22d3ee', '#0ea5e9', '#22d3ee'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-cyan-400"
            >
              CyberX
            </motion.span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            We're on a mission to make the internet a safer place by providing advanced website security analysis tools.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-400 transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400 mb-2 flex justify-center"
              >
                {stat.icon}
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-3xl font-bold text-white mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-400 mb-4">
              Founded in 2020, CyberX emerged from a simple idea: making website security accessible to everyone. What started as a small project has grown into a comprehensive platform trusted by millions of users worldwide.
            </p>
            <p className="text-gray-400">
              Our team of security experts and developers work tirelessly to stay ahead of emerging threats and provide the most accurate website analysis tools available.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-400 mb-4">
              We believe that everyone deserves to feel safe online. Our mission is to empower users with the tools and knowledge they need to identify and avoid online scams and fraudulent websites.
            </p>
            <p className="text-gray-400">
              Through continuous innovation and improvement, we strive to make the internet a safer place for all.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl font-bold text-white mb-8 text-center"
          >
            Meet Our Leader
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="max-w-md mx-auto p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center hover:border-cyan-400 transition-all"
          >
            <motion.div className="relative w-48 h-48 mx-auto mb-4">
              {[1, 2, 3, 4].map((num) => (
                <motion.img
                  key={num}
                  src={`/images/img${num}.jpeg`}
                  alt="Mohammed Zubair"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImage === num ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute top-0 left-0 w-full h-full rounded-full object-cover"
                />
              ))}
            </motion.div>
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-semibold text-white mb-1"
            >
              Mohammed Zubair A
            </motion.h3>
            <motion.p 
              variants={itemVariants}
              className="text-cyan-400 mb-4"
            >
              Founder & Developer
            </motion.p>
            <motion.p className="text-gray-400">
              Passionate about cybersecurity and making the internet a safer place for everyone.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.1)" }}
          className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals who share our passion for cybersecurity.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-lg transition-all font-medium inline-flex items-center gap-2"
          >
            View Openings
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}