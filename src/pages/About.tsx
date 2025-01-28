import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

export default function About() {
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

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">CyberX</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're on a mission to make the internet a safer place by providing advanced website security analysis tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center"
            >
              <div className="text-cyan-400 mb-2 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
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
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/50 border border-cyan-500/20 rounded-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join Our Team</h2>
          <p className="text-gray-400 mb-6">
            We're always looking for talented individuals who share our passion for cybersecurity.
          </p>
          <button className="px-8 py-3 bg-cyan-400 text-black rounded-lg hover:bg-cyan-300 transition-colors font-medium">
            View Openings
          </button>
        </div>
      </div>
    </div>
  );
}