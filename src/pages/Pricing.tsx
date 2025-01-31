import React from 'react';
import { Check, Shield, Zap, Lock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'Essential security checks for personal use',
      features: [
        'Basic Website Analysis',
        'SSL Certificate Verification',
        'Domain Age Check',
        'Limited API Access',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Advanced security features for businesses',
      features: [
        'Everything in Basic',
        'Advanced Threat Detection',
        'Real-time Monitoring',
        'Priority Support',
        'API Integration',
        'Custom Reports',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Custom solutions for large organizations',
      features: [
        'Everything in Pro',
        'Custom Integration',
        'Dedicated Support',
        'SLA Guarantee',
        'Team Management',
        'Advanced Analytics',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
          <h1 className="text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <motion.p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Choose the perfect plan for your security needs.{' '}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="inline-block"
              >
                <span className="text-cyan-400 font-semibold">Save up to 40%</span> with annual billing
              </motion.span>
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mt-4"
            />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              className={`relative p-8 bg-gray-900/50 border rounded-lg transition-all ${
                plan.popular
                  ? 'border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'border-cyan-500/20 hover:border-cyan-400'
              }`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div 
                className="text-center mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <motion.span 
                    className="text-4xl font-bold text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    {plan.price}
                  </motion.span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </motion.div>

              <motion.ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Check className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0" />
                    </motion.div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:from-cyan-300 hover:to-blue-400'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <motion.div 
            whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.1)" }}
            className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Enterprise Features
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Custom Security Rules", desc: "Create and manage custom security rules" },
                { icon: Zap, title: "Advanced API Access", desc: "Full API access with custom limits" },
                { icon: Lock, title: "Priority Support", desc: "24/7 dedicated support" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg hover:bg-gray-800/50"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}