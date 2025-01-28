import React from 'react';
import { Shield, Lock, AlertTriangle, Zap } from 'lucide-react';
import UrlChecker from '../components/UrlChecker';

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

  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Stay Safe Online with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              CyberX
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Verify websites instantly and protect yourself from online scams with our advanced security analysis.
          </p>
        </div>

        <UrlChecker />

        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-cyan-500/10 to-transparent -z-10"></div>
      </section>

      <section className="py-20 px-4 bg-black/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose <span className="text-cyan-400">CyberX</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg hover:border-cyan-400 transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Trusted by <span className="text-cyan-400">10,000+</span> Users Worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Microsoft', 'Google', 'Amazon', 'Meta'].map((company) => (
              <div
                key={company}
                className="p-4 bg-gray-900/50 border border-cyan-500/20 rounded-lg"
              >
                <p className="text-gray-400">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}