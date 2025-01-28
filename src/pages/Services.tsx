import React from 'react';
import { Shield, Lock, Search, AlertTriangle, Zap, Database } from 'lucide-react';

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

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-cyan-400">Services</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Protect yourself and your business with our comprehensive website security services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400 transition-all group"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <Zap className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Custom Security Solutions?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact our team for personalized security solutions tailored to your needs.
          </p>
          <button className="px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}